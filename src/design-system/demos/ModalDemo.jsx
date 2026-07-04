import { useState } from 'react'
import Modal from '../../components/ui/Modal'
import Button from '../../components/ui/Button'

/** Stateful demo wrapper for the Modal experiment entry. */
export default function ModalDemo() {
  const [open, setOpen] = useState(false)
  return (
    <div className="p-8 lg:p-10">
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Confirm Request">
        <p className="mono-upper text-muted mb-8">
          Submitting sends this request to the creative team queue. Turnaround depends on the selected priority.
        </p>
        <div className="flex gap-4">
          <Button onClick={() => setOpen(false)}>Confirm</Button>
          <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
        </div>
      </Modal>
    </div>
  )
}
