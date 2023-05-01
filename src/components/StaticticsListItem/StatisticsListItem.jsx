export const StatisticsListItem = ({ stat: { label, percentage } }) => {
  return (
    <div>
      <li>
        <span>{label}</span>
        <span>{percentage}</span>
      </li>
    </div>
  );
};
