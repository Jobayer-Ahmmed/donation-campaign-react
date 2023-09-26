import { useEffect, useState } from "react"
import DonationCard from "./DonationCard"
import PropTypes from 'prop-types';

const DonationCards = ({searchItem}) => {
    const [allData, setAllData] = useState([])
    useEffect(()=>{
        fetch("./donationData.json")
        .then(res=>res.json())
        .then(d=>setAllData(d))
    },[])
    let search
    if(searchItem)
      search = searchItem.toLowerCase()
    else
      search=searchItem

    const datas = allData.filter(data=>data.category.toLowerCase()===search)
    console.log(datas)
  return (
    <div className="mt-[380px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-12 lg:px-leftRightPadding">
        {
            (searchItem)? datas.map(data=><DonationCard key={data.title} data={data}/>) : allData.map(data=><DonationCard key={data.title} data={data}/>)
        } 
    </div>
  )
}
DonationCards.propTypes = {
  searchItem: PropTypes.string,
}

export default DonationCards