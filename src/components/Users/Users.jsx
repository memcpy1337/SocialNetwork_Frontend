import * as Axios from 'axios';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Users.module.css'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 0; i < pagesCount; i++) {
            pages.push(i);
        }
    return ( <div>
        <div>
            {
            pages.map(p => {
                return (<button className={(p === props.currentPage) && styles.selectedPage} onClick={() => props.onClickedPage(p)}>{p + 1}</button>
                );
            })
            }
        </div>
        {
            props.users.map(u => {
                return <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photoUrl} className={styles.userPhoto}></img>
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> : <button onClick={() => props.follow(u.id)}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {"u.location.country"}
                            </div>
                            <div>
                                {"u.location.city"}
                            </div>
                        </span>
                    </span>
                </div>
            })
        }
    </div>
    );
}
export default Users;