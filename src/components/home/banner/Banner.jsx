import { useState } from "react"
import bannerImg from "../../../assets/images/banner.jpg"
import PropTypes from 'prop-types';

const Banner = ({handleSearch}) => {
  const [searchData, setSearchData] = useState([])

  const handleSubmit=(e)=>{
    e.preventDefault()
    const searchInput = e.target.search.value
    const newSearchData = searchData.push(searchInput)
    setSearchData(newSearchData)
    handleSearch(searchData)
    e.target.search.value = ''
    setSearchData([])
    
  }
  return (
    <div className="absolute top-0 w-full h-[500px]">
      <img src={bannerImg} alt="Banner Image" className="w-full h-full object-cover opacity-5"/>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-2xl md:text-[44px]  font-semibold md:font-bold  mb-10 text-center">I Grow By Helping People In Need</h1>
        <form onSubmit={handleSubmit} className="flex justify-center w-full md:w-[750px]">
          <input name="search" type="text" placeholder="Search here...." className="w- lg:w-80 h-10 md:h-12 outline-none border-2 border-r-0 rounded-l-lg pl-4 " />
          <input type="submit" value="Search" className="w-24 h-10 md:h-12 bg-primaryColor text-white rounded-r-lg"/>
        </form>
      </div>
    </div>
  )
}

Banner.propTypes = {
  handleSearch: PropTypes.func,
}

export default Banner

