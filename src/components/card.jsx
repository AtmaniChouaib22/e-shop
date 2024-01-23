import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const handleUrl = (newId) => {
  window.location.href = `/products/${newId}`;
};

const Card = ({ title, id, image, price }) => {
  return (
    <Link
      onClick={() => {
        handleUrl(id);
      }}
    >
      <div id={id} className="grid grid-cols-1 h-80 w-52 border-2 justify-center items-center">
        <div className="flex justify-center items-center">
          <img src={image} alt={title} className="h-60"/>
        </div>
        <div>
          <div className="text-lg font-bold truncate">{title}</div>
          <div className="">${price}</div>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  image: PropTypes.string,
  price: PropTypes.number,
};

export default Card;
