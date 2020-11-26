import * as Axios from 'axios';
import React from 'react'
import { getUserPage } from '../../api/api.js';
import Preloader from '../common/Preloader/Preloader.jsx';
import Users from './Users';
import styles from './Users.module.css'

class UsersAPIComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.toogleIsFetching(true);
        getUserPage(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toogleIsFetching(false);
            this.props.setUserCount(data.number);
            this.props.setUsers(data.items);
            debugger;
        });
    }
    onClickedPage(p) {
        this.props.toogleIsFetching(true);
        this.props.setPage(p);
        getUserPage(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toogleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUserCount(data.number);
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