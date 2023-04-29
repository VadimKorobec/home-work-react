import PropTypes from 'prop-types';

export const Product = ({ imgUrl, name, price, quantity }) => {
  return (
    <div>
      <img src={imgUrl} alt={name} width="640" />
      <h2>{name}</h2>
      <p>Price:{price} $</p>
      <h1>Ouantity:{quantity < 20 ? 'Few left ' : 'in stock'}</h1>
      <button type="button">Add to cart</button>
    </div>
  );
};

Product.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
