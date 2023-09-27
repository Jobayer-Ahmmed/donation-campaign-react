import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const DonationCard = ({data}) => {
    const detailsNavigate = useNavigate()
    const {picture, title, category, category_bg, card_bg, text_button_bg} = data
  return (
    <div onClick={()=>detailsNavigate(`/card-details/${title}`)} className='cursor-pointer active:drop-shadow-2xl lg rounded-lg' style={{ backgroundColor: card_bg }}>
        <img src={picture} alt="" className='rounded-t-lg' />
        <button className='px-3 py-1 rounded m-4 text-sm font-medium' style={{ backgroundColor: category_bg, color: text_button_bg}}>{category}</button>
        <h3 className='mb-4 mx-4  text-xl font-semibold' style={{ color: text_button_bg}}>{title}</h3>
    </div>
  )
}

DonationCard.propTypes = {
    data: PropTypes.object.isRequired,
}

export default DonationCard