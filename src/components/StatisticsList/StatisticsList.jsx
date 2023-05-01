import { StatisticsListItem } from 'components/StaticticsListItem/StatisticsListItem';

export const StatiticsList = ({ stats }) => {
  return (
    <div>
      <h2>Upload stats</h2>
      <ul>
        {stats.map(stat => (
          <StatisticsListItem key={stat.id} stat={stat} />
        ))}
      </ul>
    </div>
  );
};
