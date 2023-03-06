import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div class="thankyou-page">
        <div class="_header">
            
            <h1>Thank You!</h1>
        </div>
        <div class="_body">
            <div class="_box">
                <h2>
                    <strong>Please check your email</strong> for further updates, and we will review the details you provided as soon as possible.
                </h2>
                <p>
                    Thanks a bunch for filling that out. It means a lot to us, just like you do! We really appreciate you giving us a moment of your time today. Thanks for being you.
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default App
