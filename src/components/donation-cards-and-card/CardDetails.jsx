import { useLoaderData, useParams } from "react-router-dom"
import { saveDonation } from "../../localStorage"


const CardDetails = () => {
  const allData = useLoaderData()
  const {title} = useParams()
  
  const data = allData.find(data=> data.title === title)
  // console.log(data)
  const {picture, price, description, text_button_bg} = data
  return (
    <div className="mt-topMargin px-12 lg:px-leftRightPadding">
      <div className="relative w-full">
        <img src={picture} alt="" className=" w-full h-[440px] rounded-lg"/>
        <div className="absolute bottom-0 w-full h-24 bg-black bg-opacity-40 rounded-b-lg">
          <button onClick={()=>saveDonation(title)} className="absolute left-6 bottom-6 btn text-xl font-semibold text-white px-6 py-2 rounded" style={{backgroundColor:text_button_bg}}>Donate {price}</button>
        </div>
      </div>
      <h2 className="text-4xl font-bold mt-14 mb-6">{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default CardDetails