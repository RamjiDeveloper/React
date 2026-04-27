import React, { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to])
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-between px-10 bg-gradient-to-r from-indigo-900 via-purple-900 to-black">

      {/* LEFT SIDE IMAGE */}
      <div className="w-1/2 flex justify-center items-center relative">

  <div className="relative scale-125">

    <svg width="320" height="260" viewBox="0 0 260 220">

      {/* Saucer */}
      <ellipse cx="130" cy="170" rx="100" ry="22" fill="#ddd" />

      {/* Shadow */}
      <ellipse cx="130" cy="160" rx="80" ry="18" fill="#bbb" />

      {/* Cup body */}
      <defs>
        <linearGradient id="cupGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#dcdcdc"/>
        </linearGradient>
      </defs>

      <rect x="60" y="60" width="140" height="110" rx="30" fill="url(#cupGradient)" />

      {/* Tea */}
      <ellipse cx="130" cy="75" rx="60" ry="18" fill="#c27c2c" />

      {/* Rim */}
      <ellipse cx="130" cy="70" rx="70" ry="22" fill="none" stroke="#ccc" strokeWidth="5" />

      {/* Handle */}
      <path 
        d="M200 90 Q255 120 200 150" 
        stroke="#e0e0e0" 
        strokeWidth="12" 
        fill="none" 
      />

    </svg>

    {/* Steam */}
    <div className="steam-container">
      <span></span>
      <span></span>
      <span></span>
    </div>

  </div>

</div>

      {/* RIGHT SIDE CARD */}
      <div className="w-1/2 flex justify-center">
        <div className="w-full max-w-md border border-gray-300 rounded-lg p-6 backdrop-blur-md bg-white/20 shadow-lg">

          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >

            {/* FROM */}
            <div className="w-full mb-3">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            {/* SWAP BUTTON */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1 hover:bg-blue-700 transition"
              >
                Swap
              </button>
            </div>

            {/* TO */}
            <div className="w-full mt-3 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Convert {from.toUpperCase()} → {to.toUpperCase()}
            </button>

          </form>

        </div>
      </div>

    </div>
  )
}

export default App