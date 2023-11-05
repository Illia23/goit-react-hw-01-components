import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = (props) => {
    return (
        <div className={css.container_for_friend}>
            <ul className={css.friendlist}>
                {props.friends.map(({ avatar, name, isOnline, id }) => {
                    return (
                        <li key={id} className={css.item}>
                            <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
                            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                            <p className={css.name}>{name}</p>
                        </li>
        
                    )
                    
                
                })}

            
   
            </ul>
        </div>
            
)

}

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
}