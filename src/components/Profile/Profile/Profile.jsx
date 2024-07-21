import css from './Profile.module.css'
const Profile = ({
    nameEl,
    tag,
    location,
    image,
    stats,

}) => {
    return (
      <div className={css.card}>
        <div className={css.divInformation}>
          <img src={image} alt="User avatar" className={css.logo} />
          <p className={css.name}>{nameEl}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.list}>
          <li className={css.listItem}>
            <span className={css.spanTextItem}>Followers</span>
            <span className={css.spanNombersItem}>{stats.followers}</span>
          </li>
          <li className={css.listItem}>
            <span className={css.spanTextItem}>Views</span>
            <span className={css.spanNombersItem}>{stats.views}</span>
          </li>
          <li className={css.listItem}>
            <span className={css.spanTextItem}>Likes</span>
            <span className={css.spanNombersItem}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
    
};
export default Profile