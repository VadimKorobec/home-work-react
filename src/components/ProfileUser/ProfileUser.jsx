export const ProfileUser = ({
  user: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, likes, views },
  },
}) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="user avatar" />
        <p> {username}</p>
        <p> {tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>
          <span>Folowers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
      </ul>
    </div>
  );
};
