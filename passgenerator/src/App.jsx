import React, { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '~!@#$%^&*(){}[]_-+=/'

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length)
      pass += str.charAt(index)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(Password)

    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }, [Password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-6 bg-gray-800 text-orange-700'>
      <h1 className='text-white text-center mb-6 text-xl font-semibold'>
        Password Generator
      </h1>

      <div className='relative mb-6'>
        {/* Animated Text */}
        {copied && (
          <span className="absolute left-1/2 -translate-x-1/2 -top-6 text-green-400 text-sm animate-copy">
            Copied!
          </span>
        )}

        <div className='flex shadow rounded-lg overflow-hidden'>
          <input
            type="text"
            value={Password}
            className='w-full py-1 px-3 border bg-white rounded outline-none'
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'
          >
            Copy
          </button>
        </div>
      </div>

      <div className='flex text-sm gap-x-4 flex-wrap'>
        <div className='flex items-center gap-x-2'>
          <input
            type="range"
            min={6}
            max={60}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label className="text-white">Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label className="text-white">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label className="text-white">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App