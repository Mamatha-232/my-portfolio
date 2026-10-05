import { useState } from 'react'
import { profile } from '../data'

// Sends the message to Web3Forms, which emails it to you. No server needed.
export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error | setup

  const submit = async (e) => {
    e.preventDefault()
    const form = e.target
    const f = new FormData(form)
    if (f.get('botcheck')) return                       // hidden field: only bots fill it
    if (profile.formKey.startsWith('YOUR_')) return setStatus('setup')
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: profile.formKey,
          subject: 'New message from your portfolio',
          name: f.get('name'), email: f.get('email'), message: f.get('message'),
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'sent' : 'error')
      if (data.success) form.reset()
    } catch { setStatus('error') }
  }

  const note = {
    sent: 'Thanks, your message was sent.',
    error: 'Something went wrong. Please try again.',
    setup: 'The form is not connected yet: add your key in data.js.',
  }[status]

  return (
    <form className="cform" onSubmit={submit}>
      <label>Your name<input name="name" required autoComplete="name" /></label>
      <label>Your email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Message<textarea name="message" rows="5" required /></label>
      <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />
      <button className="btn" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send message'}</button>
      {note && <p role="status" className="note">{note}</p>}
    </form>
  )
}
