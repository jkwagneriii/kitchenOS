import { useState } from 'react'
import { motion } from 'framer-motion'
import FormField from '../../../components/ui/FormField'

const initialForm = {
  name: '',
  email: '',
  department: '',
  requestType: '',
  projectName: '',
  description: '',
  deadline: '',
  priority: '',
  references: '',
  notes: '',
}

export default function CreativeRequest() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative border-b border-white/10">
        <div className="bg-accent flex flex-col justify-end px-8 md:px-12 lg:px-16 pb-16 pt-32 lg:pt-24 min-h-[50vh] lg:min-h-[60vh]">
          <motion.h1
            className="text-mega text-white mb-8 pb-[0.1em]"
            initial={{ clipPath: 'inset(100% 0 -10% 0)' }}
            animate={{ clipPath: 'inset(0 0 -10% 0)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            Creative<br />
            Request
          </motion.h1>
          <motion.p
            className="text-display text-white/70 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            Submit a request to the Creative Team™.
          </motion.p>
        </div>
      </section>

      {/* ── FORM SECTION ───────────────────────────────────────── */}
      <section className="border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7 px-8 md:px-12 lg:px-16 py-section-y border-r border-white/10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="bg-accent/10 border border-accent/30 p-8 lg:p-12">
                  <h3 className="text-display text-white mb-4">Request Submitted</h3>
                  <p className="mono-upper text-muted mb-6">
                    Your creative request has been received. The team will review it and get back to you within 1-2 business days.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm) }}
                    className="px-8 py-4 border-2 border-accent text-accent font-mono text-mono-body uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    Submit Another
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="text-display text-white mb-8 animate-on-scroll">Request Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  <FormField label="Your Name" name="name" required placeholder="Full name" value={form.name} onChange={handleChange} />
                  <FormField label="Email" name="email" type="email" required placeholder="you@company.com" value={form.email} onChange={handleChange} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  <FormField
                    label="Department / Team"
                    name="department"
                    type="select"
                    required
                    placeholder="Select department..."
                    options={['Marketing', 'Sales', 'Product', 'Engineering', 'People Ops', 'Executive', 'Other']}
                    value={form.department}
                    onChange={handleChange}
                  />
                  <FormField
                    label="Request Type"
                    name="requestType"
                    type="select"
                    required
                    placeholder="Select type..."
                    options={['Logo Usage', 'Social Media Asset', 'Presentation Template', 'Print Collateral', 'Event Material', 'Custom', 'Other']}
                    value={form.requestType}
                    onChange={handleChange}
                  />
                </div>

                <FormField label="Project Name" name="projectName" required placeholder="Brief project title" value={form.projectName} onChange={handleChange} />
                <FormField label="Description" name="description" type="textarea" required rows={5} placeholder="Describe what you need, the intended audience, and any specific requirements..." value={form.description} onChange={handleChange} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  <FormField label="Deadline" name="deadline" type="date" required value={form.deadline} onChange={handleChange} />
                  <FormField
                    label="Priority"
                    name="priority"
                    type="select"
                    required
                    placeholder="Select priority..."
                    options={['Low', 'Medium', 'High', 'Urgent']}
                    value={form.priority}
                    onChange={handleChange}
                  />
                </div>

                <FormField label="Reference Links / Files" name="references" placeholder="URLs, Google Drive links, or file names" value={form.references} onChange={handleChange} />
                <FormField label="Additional Notes" name="notes" type="textarea" rows={3} placeholder="Anything else the creative team should know..." value={form.notes} onChange={handleChange} />

                <button
                  type="submit"
                  className="mt-4 px-8 py-4 bg-accent text-white font-mono text-mono-body uppercase tracking-widest font-bold hover:bg-accent/80 transition-all duration-300 cursor-pointer"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div className="lg:col-span-5 px-8 md:px-10 py-section-y">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              <h2 className="text-title text-white mb-6">How It Works</h2>
              <div className="space-y-6">
                {[
                  { num: '01', title: 'Submit', desc: 'Fill out the form with your project details and requirements.' },
                  { num: '02', title: 'Review', desc: 'The creative team reviews your request and may reach out for clarification.' },
                  { num: '03', title: 'Create', desc: 'We produce the deliverables based on brand guidelines and your specifications.' },
                  { num: '04', title: 'Deliver', desc: 'Assets are delivered to you for review, with revisions as needed.' },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <span className="font-mono text-mono-sm text-accent/50 flex-shrink-0 pt-1">{step.num}</span>
                    <div>
                      <h3 className="text-title text-white mb-1">{step.title}</h3>
                      <p className="font-mono text-mono-body uppercase text-white/60">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 mt-8 pt-8">
                <h4 className="font-mono text-mono-sm uppercase tracking-widest text-faint mb-3">Turnaround Times</h4>
                <div className="space-y-2">
                  {[
                    { label: 'Low Priority', time: '5-7 business days' },
                    { label: 'Medium Priority', time: '3-5 business days' },
                    { label: 'High Priority', time: '1-2 business days' },
                    { label: 'Urgent', time: 'Same day (subject to availability)' },
                  ].map((t) => (
                    <div key={t.label} className="flex items-center justify-between font-mono text-mono-body uppercase text-white/60">
                      <span>{t.label}</span>
                      <span className="text-white/70">{t.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
