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
    <div id="banner" className="absolute top-0 w-full h-[400px]">
      <img src={bannerImg} alt="Banner Image" className="w-full h-[400px] object-cover opacity-5"/>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 id="banner_title" className="text-4xl font-bold  mb-10">I Grow By Helping People In Need</h1>
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input name="search" type="text" placeholder="Search here...." className="w-80 h-10 outline-none border-2 border-r-0 rounded-l-lg pl-4 " />
          <input type="submit" value="Search" className="w-24 h-10 bg-primaryColor text-white rounded-r-lg"/>
        </form>
      </div>
    </div>
  )
}

Banner.propTypes = {
  handleSearch: PropTypes.func,
}

export default Banner

