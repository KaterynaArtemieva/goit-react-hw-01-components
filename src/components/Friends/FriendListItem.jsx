import PropTypes from 'prop-types';
import css from '../Friends/FriendListItem.module.css';

export const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  let status = '';
  isOnline ? (status = 'online') : (status = 'offline');
  return (
    <li className={css.item}>
      <span className={`${css.status} ${css[status]}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  props: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
