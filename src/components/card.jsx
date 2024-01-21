import PropTypes  from 'prop-types';

const Card = ({title, price, image}) => {

    return (
        <div className='grid-rows-2 w-48 flex flex-col items-center rounded-md bg-slate-200 '>
            <div className='bg-cover w-full'>
                <img src={image} alt="item" className="h-52 w-full"/>
            </div>
            <div className='w-full h-full'>
                <h4>{title}</h4>
                <h6>${price}</h6>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string, 
    price: PropTypes.number,
    image: PropTypes.string,
    key: PropTypes.number
}

Card.defaultProps = {
    title: "",
    price: 0,
    src: "",
}

export default Card 