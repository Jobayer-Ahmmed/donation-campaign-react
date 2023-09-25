import { useLoaderData } from "react-router-dom"
import { getDonation } from "../../localStorage"
import { useEffect, useState } from "react"
import AfterDonationCard from "./AfterDonationCard"

const AfterDonationCards = () => {
  const [datas, setDatas] = useState([])
  const allData = useLoaderData()

  useEffect(()=>{
    const getTitle = getDonation()
 
    if(allData.length>0){
      const data = allData.filter(data=> getTitle.includes(data.title))
      console.log(data)
      setDatas(data)
    }
  },[])

  
  return (
    <div className="mt-topMargin px-12 lg:px-leftRightPadding grid grid-cols-2 gap-6">
      {
        datas.map((data)=><AfterDonationCard key={data.title} data={data}/>)
      }
    </div>
  )
}

export default AfterDonationCards