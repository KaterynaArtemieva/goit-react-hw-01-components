import PropTypes from 'prop-types';
import cssPr from '../Profile/Profile.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    // console.log(friends);
  return (
    <ul className={cssPr.profile}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};
// FriendList.propTypes = PropTypes.arrayOf(
//   PropTypes.exact({
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
//     id: PropTypes.number.isRequired,
//   })
// );
