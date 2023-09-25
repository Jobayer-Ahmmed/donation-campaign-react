import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AfterDonationCard = ({data}) => {
    const {picture, title, category, category_bg, card_bg, text_button_bg, price} = data

  return (
    <div className=' flex cursor-pointer active:drop-shadow-2xl lg rounded-lg' style={{ backgroundColor: card_bg }}>
        <div>
            <img src={picture} alt="" className='h-full w-40' />
        </div>
        <div>
            <div className='p-5'>
                <div>
                    <span className='rounded  text-sm font-medium px-3 py-1' style={{ backgroundColor: category_bg, color: text_button_bg}}>{category}</span>
                </div>
                <h3 className='my-1 text-xl font-semibold'>{title}</h3>
                <p className='mb-5 font-semibold' style={{ color: text_button_bg}}>{price}</p>
                <Link to="#" className=' text-white px-4 py-2 rounded' style={{ backgroundColor: text_button_bg}}>View Details</Link>
            </div>
        </div>
    </div>
  )
}

AfterDonationCard.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AfterDonationCard