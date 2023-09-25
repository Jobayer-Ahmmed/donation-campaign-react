import { useLoaderData } from "react-router-dom"
import { getDonation } from "../../localStorage"
import { useEffect, useState } from "react"
import AfterDonationCard from "./AfterDonationCard"

const AfterDonationCards = () => {
  const [datas, setDatas] = useState([])
  const [length, setLength] = useState(4)
  const allData = useLoaderData()

  // useEffect(()=>{
  //   const getTitle = getDonation()
  //   for(const i in getTitle){
  //     if(getTitle.length>0){
  //       const data = allData.filter(data=> data.includes(getTitle[i].title))
  //       setDatas(data)

  //     }
  // }
  // },[])

  useEffect(()=>{
    const getTitle = getDonation()
    if(allData.length>0){
      const data = allData.filter(data=> getTitle.includes(data.title))
      setDatas(data)
    }
  },[])

  
  return (
    <div className="mt-topMargin px-12 lg:px-leftRightPadding">
      <div className="grid grid-cols-2 gap-6">
        {
          datas.slice(0, length).map((data,id)=><AfterDonationCard key={id}  data={data}/>)
        }
      </div>
      <div  className={`${(length == datas.length)? 'hidden': ''} text-center mt-10`}>
        <button onClick={()=>setLength(datas.length)} className="btn bg-greenCustomColor hover:bg-green-600 active:bg-green-700 text-white">See All</button>
      </div>
    </div>
  )
}

export default AfterDonationCards