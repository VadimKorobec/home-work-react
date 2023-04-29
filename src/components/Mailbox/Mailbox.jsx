export const Mailbox = ({ username, unreadMessages }) => {
  return (
    <div>
      <h1>Hello {username}</h1>
      {unreadMessages.length > 0 ? (
        <p>You have {unreadMessages.lenght} unread message</p>
      ) : (
        <p>No unread message</p>
      )}
    </div>
  );
};
