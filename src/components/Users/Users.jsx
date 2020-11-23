import * as Axios from 'axios';
import React from 'react'
import styles from './Users.module.css'

class Users extends React.Component {
    constructor(props) {
        super(props);
        Axios.get("https://localhost:44364/api/users/").then(response => {
            this.props.setUsers(response.data);
        });
    }
    render() {
        return <div>
            {
                this.props.users.map(u => {
                    return <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoUrl} className={styles.userPhoto}></img>
                            </div>
                            <div>
                                {
                                    u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
    }

}
export default Users;