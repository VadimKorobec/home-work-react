export const FriendsItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div>
      <li>
        <span>{isOnline}</span>
        <img src={avatar} alt="" width="48" />
        <p>{name}</p>
      </li>
    </div>
  );
};
