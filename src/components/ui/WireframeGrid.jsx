import { useEffect, useRef, useCallback, useState } from "react";

const ACCENT = "#4B3FFF";
const LOOP_MS = 9500;
const TARGET_CELL = 68;
const PHI = (1 + Math.sqrt(5)) / 2;
const PHI2 = PHI * PHI;

// cycle phase boundaries (normalized 0→1)
const P_DRAW_END    = 0.26; // lines finish drawing
const P_FILL_IN     = 0.28; // squares start filling in
const P_FILL_DONE   = 0.44; // all squares filled — solid accent wall
const P_HOLD_END    = 0.52; // pause ends, image has swapped
const P_FILL_OUT    = 0.70; // squares finish revealing image
const P_ERASE_START = 0.76; // lines start erasing

const IMAGES = [
  "/image-cycle/Low-res-104.webp",
  "/image-cycle/Low-res-109.webp",
  "/image-cycle/Low-res-122.webp",
  "/image-cycle/Low-res-13.webp",
  "/image-cycle/Low-res-151.webp",
  "/image-cycle/Low-res-158.webp",
  "/image-cycle/Low-res-168.webp",
  "/image-cycle/Low-res-175.webp",
  "/image-cycle/Low-res-18.webp",
  "/image-cycle/Low-res-189.webp",
  "/image-cycle/Low-res-203.webp",
  "/image-cycle/Low-res-209.webp",
  "/image-cycle/Low-res-23.webp",
  "/image-cycle/Low-res-77.webp",
];

function parseHex(hex) {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  };
}

function smoothstep(t) {
  t = Math.max(0, Math.min(1, t));
  return t * t * (3 - 2 * t);
}

function imageForCycle(cycleIndex) {
  return Math.floor(((cycleIndex * PHI) % 1) * IMAGES.length);
}

// seeded pseudo-random shuffle — returns a permutation array
// maps each cell to a unique position in [0, totalCells)
function buildShuffleOrder(totalCells, cycleIndex) {
  // mulberry32 PRNG seeded per cycle
  let s = (cycleIndex + 1) * 2654435761 | 0;
  function rand() {
    s |= 0; s = s + 0x6D2B79F5 | 0;
    let t = Math.imul(s ^ s >>> 15, 1 | s);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
  // Fisher-Yates shuffle
  const order = Array.from({ length: totalCells }, (_, i) => i);
  for (let i = totalCells - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

export default function WireframeGrid({ showImages = true }) {
  const canvasRef = useRef(null);
  const sizeRef   = useRef({ width: 0, height: 0 });
  const rafRef    = useRef(null);
  const t0Ref     = useRef(null);
  const lastCycleRef = useRef(-1);
  const shuffleRef = useRef({ cycle: -1, order: [] });
  const { r, g, b } = parseHex(ACCENT);

  const [imageIndex, setImageIndex] = useState(() => showImages ? imageForCycle(0) : 0);

  const computeGrid = useCallback((w, h) => {
    const cols = Math.max(1, Math.round(w / TARGET_CELL));
    const rows = Math.max(1, Math.round(h / TARGET_CELL));
    return { cols, rows, cw: w / cols, ch: h / rows };
  }, []);

  const drawAnimLine = useCallback(
    (ctx, x1, y1, x2, y2, progress, alpha) => {
      let headP, tailP;
      if (progress <= 1) {
        headP = smoothstep(progress);
        tailP = 0;
      } else {
        headP = 1;
        tailP = smoothstep(progress - 1);
      }
      if (headP <= tailP) return;

      const sx = x1 + (x2 - x1) * tailP;
      const sy = y1 + (y2 - y1) * tailP;
      const ex = x1 + (x2 - x1) * headP;
      const ey = y1 + (y2 - y1) * headP;

      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(ex, ey);
      ctx.strokeStyle = `rgb(${r},${g},${b})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    },
    [r, g, b]
  );

  const draw = useCallback(
    (ts) => {
      if (!t0Ref.current) t0Ref.current = ts;
      const elapsed = ts - t0Ref.current;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const { width: w, height: h } = sizeRef.current;
      if (!w || !h) { rafRef.current = requestAnimationFrame(draw); return; }

      ctx.clearRect(0, 0, w, h);
      const { cols, rows, cw, ch } = computeGrid(w, h);

      const cycleIndex = Math.floor(elapsed / LOOP_MS);
      const cycle = (elapsed % LOOP_MS) / LOOP_MS;
      const LINE_STAGGER = 0.55;
      const totalCells = cols * rows;

      // ── swap image during hold (fully covered by accent) ──
      if (showImages && cycle >= P_FILL_DONE && lastCycleRef.current !== cycleIndex) {
        lastCycleRef.current = cycleIndex;
        setImageIndex(imageForCycle(cycleIndex + 1));
      }

      // ── draw phase: 0 → P_DRAW_END ──
      const drawPhase = Math.min(1, cycle / P_DRAW_END);
      // ── erase phase: P_ERASE_START → 1 ──
      const erasePhase = cycle > P_ERASE_START
        ? Math.min(1, (cycle - P_ERASE_START) / (1 - P_ERASE_START))
        : 0;

      function lineProgress(i) {
        const offset = ((i * PHI + cycleIndex * PHI2) % 1) * LINE_STAGGER;
        const dp = Math.max(0, Math.min(1, (drawPhase  - offset) / (1 - LINE_STAGGER)));
        const ep = Math.max(0, Math.min(1, (erasePhase - offset) / (1 - LINE_STAGGER)));
        return dp + ep;
      }

      // ── accent square fills ──
      // fill in: P_FILL_IN → P_FILL_DONE
      // hold:    P_FILL_DONE → P_HOLD_END (solid wall)
      // reveal:  P_HOLD_END → P_FILL_OUT
      if (cycle > P_FILL_IN && cycle < P_FILL_OUT) {
        const FILL_STAGGER = 0.97;

        // build/cache shuffle order per cycle
        if (shuffleRef.current.cycle !== cycleIndex || shuffleRef.current.order.length !== totalCells) {
          shuffleRef.current = { cycle: cycleIndex, order: buildShuffleOrder(totalCells, cycleIndex) };
        }
        const order = shuffleRef.current.order;

        for (let s = 0; s < totalCells; s++) {
          const col = s % cols;
          const row = Math.floor(s / cols);
          const offset = (order[s] / (totalCells - 1)) * FILL_STAGGER;

          let fillAlpha;
          if (cycle < P_FILL_DONE) {
            // stagger in
            const t = (cycle - P_FILL_IN) / (P_FILL_DONE - P_FILL_IN);
            fillAlpha = smoothstep(Math.max(0, Math.min(1, (t - offset) / (1 - FILL_STAGGER))));
          } else if (cycle < P_HOLD_END) {
            // hold — solid wall
            fillAlpha = 1;
          } else {
            // stagger out
            const t = (cycle - P_HOLD_END) / (P_FILL_OUT - P_HOLD_END);
            fillAlpha = 1 - smoothstep(Math.max(0, Math.min(1, (t - offset) / (1 - FILL_STAGGER))));
          }

          if (fillAlpha < 0.01) continue;
          ctx.fillStyle = `rgba(${r},${g},${b},${fillAlpha})`;
          ctx.fillRect(col * cw, row * ch, cw, ch);
        }
      }

      // ── grid lines (same accent color, on top) ──
      for (let c = 0; c <= cols; c++) {
        const p = lineProgress(c);
        if (p <= 0 || p >= 2) continue;
        drawAnimLine(ctx, c * cw, 0, c * cw, h, p);
      }

      for (let rw = 0; rw <= rows; rw++) {
        const p = lineProgress(cols + 1 + rw);
        if (p <= 0 || p >= 2) continue;
        drawAnimLine(ctx, 0, rw * ch, w, rw * ch, p);
      }

      rafRef.current = requestAnimationFrame(draw);
    },
    [computeGrid, drawAnimLine, r, g, b]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement || canvas;

    const seed = () => {
      const dpr = window.devicePixelRatio || 1;
      const { offsetWidth: w, offsetHeight: h } = parent;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width  = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.getContext("2d").scale(dpr, dpr);
      sizeRef.current = { width: w, height: h };
    };

    const ro = new ResizeObserver(seed);
    ro.observe(parent);
    seed();
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [draw]);

  return (
    <>
      {showImages && (
        <img
          src={IMAGES[imageIndex]}
          alt=""
          loading="lazy"
          decoding="async"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            filter: "grayscale(100%) contrast(120%) brightness(1.0)",
          }}
        />
      )}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          display: "block",
          background: "transparent",
          pointerEvents: "none",
        }}
      />
    </>
  );
}
