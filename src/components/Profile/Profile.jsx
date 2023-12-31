import PropTypes from 'prop-types';
import { addCommasToNumber } from 'utils';
import css from './Profile.module.css';

export const Profile = ({
  username,
  tag,
  location = 'Unknown',
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img
        className={css.avatar}
        src={avatar}
        alt="User avatar"
        width={128}
        height={128}
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>
          {addCommasToNumber(stats.followers)}
        </span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{addCommasToNumber(stats.views)}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{addCommasToNumber(stats.likes)}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
