import React from 'react'
import { useParams } from 'react-router-dom'
 
const CoinDetailPage = () => {
  
  const {id} = useParams()
  
  
  return (
    <div>CoinDetailPage</div>
  )
}

export default CoinDetailPage