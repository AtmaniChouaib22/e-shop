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
      <div id={id}>
        <div>
          <img src={image} alt={title} />
        </div>
        <div>
          <div>{title}</div>
          <div>{price}</div>
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
