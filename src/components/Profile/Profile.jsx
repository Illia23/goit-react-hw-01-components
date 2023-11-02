import PropTypes from 'prop-types'
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
      <div className="profile" key={id}>
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
                <p className="name">{ username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location }</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
                    <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
                    <span className="quantity">{stats.views }</span>
    </li>
    <li>
      <span className="label">Likes</span>
                    <span className="quantity">{stats.likes }</span>
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
