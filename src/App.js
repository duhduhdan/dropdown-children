import React, { Component } from 'react'
import './App.css'

import { PlusMinusInput } from './components/organisms/organisms'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <PlusMinusInput
            label="Rooms"
            max={26}
            theme="rentals"
          />
        </div>
        <div style={{margin: '0 60px'}}>
          <PlusMinusInput
            label="Adults"
            max={6}
            theme="chcom"
          />
        </div>
        <div>
          <PlusMinusInput
            label="Children"
            max={6}
            theme="chcom"
          />
        </div>
      </div>
    )
  }
}

export default App
