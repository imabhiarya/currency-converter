import React, { useId } from 'react'

function Card({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions =[],
    selectCurrency = "inr",
    amountDisable = false,
    currencyDisable = false,

    className ="",

}) {

    const amountInputId = useId()

   
  return (
    <div className={`bg-orange-300 p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block"
                    htmlFor={amountInputId}
                >
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled ={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    onChange={(e) => onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    value={selectCurrency}
                    // onSelect={selectCurrency}
                >
                    {
                          currencyOptions.map((currency) => (<option key={currency} value={currency}

                          >{currency} </option>))
                    }
                    
                        
                
                </select>
            </div>
        </div>
  )
}

export default Card