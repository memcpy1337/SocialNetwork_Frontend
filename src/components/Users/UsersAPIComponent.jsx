import * as Axios from 'axios';
import React from 'react'
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';
import styles from './Users.module.css'

class UsersAPIComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.toogleIsFetching(true);
        Axios.get('https://localhost:44364/api/users/GetUserPage/page=' + this.props.currentPage + '/count=' + this.props.pageSize).then(response => {
            this.props.toogleIsFetching(false);
            this.props.setUserCount(response.data.number);
            this.props.setUsers(response.data.items);
        });
    }
    onClickedPage(p) {
        this.props.toogleIsFetching(true);
        this.props.setPage(p);
        Axios.get('https://localhost:44364/api/users/GetUserPage/page=' + p + '/count=' + this.props.pageSize).then(response => {
            this.props.toogleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setUserCount(response.data.number);
        });

    }
    render() {
        debugger;
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onClickedPage={this.onClickedPage.bind(this)}
                users={this.props.users} follow={this.props.follow}
                unfollow={this.props.unfollow} />
        </>
    }

}
export default UsersAPIComponent;