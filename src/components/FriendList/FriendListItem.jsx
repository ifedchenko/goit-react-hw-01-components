import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={css.isOnline}></span>
      ) : (
        <span className={css.isOffline}></span>
      )}
      <img className={css.avatar} src={avatar} alt={name} width={48} />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
