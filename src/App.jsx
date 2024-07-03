import React from 'react'
import {Box} from './components/Box'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {useState} from 'react'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
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
    setConvertedAmount(amount * currencyInfo[to])
  }  

  return (
    <>
    <div className='flex flex-col justify-center px-4 py-2 w-96 border-4'>
    <h1 className='text-center text-2xl mb-11'>Currency Converter</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        convert()
      }}>
        <div>
          <Box label='From' amount={amount} currencyOptions={options} onAmountChange={(amount) => setAmount(amount)} onCurrencyChange={(currency) => setFrom(currency)} selectCurrency={from} />
        </div>
        <div className='flex items-center justify-center'>
          <button className='bg-gray-100 border-cyan-200 border-2 px-7 py-2 rounded-md font-semibold' type='button' onClick={swap}>swap</button>
        </div>
        <div className='mt-10'>
          <Box label='To' amount={convertedAmount} currencyOptions={options} onCurrencyChange={(currency) => setTo(currency)} selectCurrency={to}
          amountDisable />
        </div>
        <button className='text-center w-full bg-gray-400  py-5 font-bold' type='submit'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </form>
      </div>
    </>
  )
}

export default App