import { useEffect, useState } from "react"
import DonationCard from "./DonationCard"

const DonationCards = () => {
    const [allData, setAllData] = useState([])
    useEffect(()=>{
        fetch("./donationData.json")
        .then(res=>res.json())
        .then(d=>setAllData(d))
    },[])
  return (
    <div className="grid grid-cols-4 gap-6 px-12 lg:px-40">
        {
            allData.map(data=><DonationCard key={data.title} data={data}/>)
        }
    </div>
  )
}

export default DonationCards