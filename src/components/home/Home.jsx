
import Banner from './banner/Banner'
import DonationCards from '../donation-cards-and-card/DonationCards'
import { useState } from 'react'

const Home = () => {
  const [searchItem, setSearchItem] = useState(null)
  const handleSearch=(searchData)=>{
      setSearchItem(searchData[0])
  }
  return (
    <div>
      <Banner handleSearch={handleSearch}/>
      <DonationCards searchItem = {searchItem}/>
    </div>
  )
}

export default Home