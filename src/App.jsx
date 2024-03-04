import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import BackgroundImage from './assets/background.jpg'

function App() {

  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("inr");
  const [from, setFrom] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState('');
  

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo);


  // useCurrencyInfo("inr");

  const swap = () => {
    setFrom(to);
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])

  }


  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
          <h1 className=' text-4xl px-4 py-1 rounded-md font-bold underline'>Currency Converter</h1>
            <div className="w-full h-4/6">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <Card
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-emerald-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Card
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                                // onAmountChange={(amount) => setAmount(amount)} 
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-emerald-600 text-white px-4 py-3 rounded-lg"
                        >
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    
  )
}

export default App
