import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CoinDetailPage from './pages/CoinDetailPage'
import CoinSummaryPage from './pages/CoinSummaryPage'
import Header from './components/Header'
import "./App.css"

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" component={CoinSummaryPage} />
            </Routes>
                
        </BrowserRouter>
    </div>
  )
}

export default App