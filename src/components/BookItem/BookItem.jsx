export const BookItem = ({ book: { name, price } }) => {
  return (
    <div>
      <li>
        <h2>{name}</h2>
        <p>{price}</p>
      </li>
    </div>
  );
};
