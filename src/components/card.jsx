import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/*
const handleUrl = (newId) => {
  window.location.href = `/products/${newId}`;
};
*/

const Card = ({ title, id, image, price }) => {
  return (
    <Link to={`/products/${id}`}>
      <div
        id={id}
        className="grid grid-cols-1 sm:h-80 sm:w-52  w-40 shadow-md rounded-md justify-center items-center bg-white transition duration-150 ease-out hover:ease-in hover:scale-105"
      >
        <div className="flex justify-center items-center">
          <img src={image} alt={title} className="sm:h-60 h-48" />
        </div>
        <div className="p-3">
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

/* 
onClick={() => {
        handleUrl(id);
      }}
*/

export default Card;
