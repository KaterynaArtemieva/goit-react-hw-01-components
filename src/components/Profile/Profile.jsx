import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = user => {
  const {
    info: {
      avatar,
      username,
      tag,
      location,
      stats: { followers, views, likes },
    },
  } = user;
  return (
    <div className={css.profile}>
      <div className={css.userCard}>
        <div className={css.description}>
          <img src={avatar} alt="User avatar" className={css.avatar} />
          <p className={css.name}>{username}</p>
          <p className={css.descrText}>@{tag}</p>
          <p className={css.descrText}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li className={css.statsItem}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{followers}</span>
          </li>
          <li className={css.statsItem}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{views}</span>
          </li>
          <li className={css.statsItem}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  info: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
