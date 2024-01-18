import PropTypes  from 'prop-types';

const Card = ({title, price, src}) => {

    return (
        <div>
            <div><img src={src} alt="item" /></div>
            <div>
                <h4>{title}</h4>
                <h6>{price}</h6>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string, 
    price: PropTypes.number,
    src: PropTypes.string
}

Card.defaultProps = {
    title: "",
    price: 0,
    src: ""
}

export default Card 