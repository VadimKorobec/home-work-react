import { FriendsItem } from 'components/FriendsItem/FriendsItem';

export const FriendsList = ({ friends }) => {
  return (
    <div>
      <ul>
        {friends.map(friend => (
          <FriendsItem key={friend.id} friend={friend} />
        ))}
      </ul>
    </div>
  );
};
