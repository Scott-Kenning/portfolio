import { useState } from 'react'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Here is where you would make a fetch request to your API route
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ email, message }),
      headers: { 'Content-Type': 'application/json' },
    })

    // For now, let's just log the form data to the console
    console.log({ email, message })
  }

  return (
    <form onSubmit={handleSubmit} className="w-full h-full flex flex-col items-center justify-center">
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        type="email" 
        placeholder="Email" 
        className="mb-4 p-2 w-2/3 border border-gray-300"
      />
      <textarea 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Message" 
        className="mb-4 p-2 w-2/3 h-32 border border-gray-300"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white">Send</button>
    </form>
  )
}

export default Contact
