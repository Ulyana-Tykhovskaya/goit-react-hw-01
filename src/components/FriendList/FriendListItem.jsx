import PropTypes from "prop-types";
import css from "./FriendList.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: isOnline ? "green" : "red" }}
      ></span>
      <img src={avatar} alt={name} className={css.avatar} />
      <p className={isOnline ? css.onlineText : css.offlineText}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
