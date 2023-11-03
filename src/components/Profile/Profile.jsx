import PropTypes from 'prop-types';
import css from './Profile.module.css';
// 1 variant
// import user from '../../user.json';
// const Profile = () => {
//     return user.map((el) => (
//         <div className="profile" key={el.id}>
//   <div className="description">
//     <img
//       src={el.avatar}
//       alt="User avatar"
//       className="avatar"
//     />
//                 <p className="name">{ el.username}</p>
//                 <p className="tag">{el.tag}</p>
//                 <p className="location">{el.location }</p>
//   </div>

//   <ul className="stats">
//     <li>
//       <span className="label">Followers</span>
//                     <span className="quantity">{el.stats.followers}</span>
//     </li>
//     <li>
//       <span className="label">Views</span>
//                     <span className="quantity">{el.stats.views }</span>
//     </li>
//     <li>
//       <span className="label">Likes</span>
//                     <span className="quantity">{el.stats.likes }</span>
//     </li>
//   </ul>
// </div>
//     ))
// }
 
// export default Profile;

 export const Profile = ({username, tag, location, avatar, stats, id }) => {
  return (
    <div className={css.profile} key={id}>
      <div className={css.description}>
    <img width="300px"
          src={avatar}
          alt="User avatar"
          className={css.avatar}
    />
        <p className={css.name}>{ username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location }</p>
  </div>

      <ul className={css.stats}>
    <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views }</span>
    </li>
    <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes }</span>
    </li>
  </ul>
</div>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
