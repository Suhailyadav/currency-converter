import React from 'react'
import {useId} from 'react'

function Box({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false

}) {
  const amountInputId = useId()

  
 
  return (
    <>
      
        <div className='flex justify-between mb-10'>
          <div className='flex flex-col  items-center '>
            <label htmlFor={amountInputId}>{label}</label>
            <input id={amountInputId} type="number" placeholder="0" className='border-cyan-200 border-2 w-32 bg-gray-200 px-2 py-1 rounded-md mt-2' disabled={amountDisable} value={amount === 0 ? '' : amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value)) } />
          </div>
          <div className='flex flex-col justify-center items-center '>
            <label htmlFor="">Currency Type</label>
            <select type="text" className='border-cyan-200 border-2 w-20 mt-2 bg-gray-200 px-2 py-1 rounded-md' value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>

              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}

            </select>  
          </div>
        </div>
      
    </>
  )
}

export {Box}