import PropTypes from 'prop-types';
import cssPr from '../Profile/Profile.module.css';
import { getRandomHexColor } from './randomColor';

export const Statistics = props => {
  const { stats, title } = props;
  return (
    <section className={cssPr.profile}>
      <div className={cssPr.userCard}>
        <h2 className={cssPr.name}>{title}</h2>

        <ul className={cssPr.stats}>
          {stats.map(({ id, label, percentage }) => {
            const color = getRandomHexColor();
            return (
              <li
                className={cssPr.statsItem}
                style={{
                  backgroundColor: color,
                  border: 'none',
                }}
                key={id}
              >
                <span
                  className={cssPr.label}
                  style={{
                    color: '#ffffff',
                  }}
                >
                  {label}
                </span>
                <span
                  className={cssPr.quantity}
                  style={{
                    color: '#ffffff',
                  }}
                >
                  {percentage}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
