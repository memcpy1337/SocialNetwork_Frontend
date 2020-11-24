import React from 'react'
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC, setUserCountAC, isFetchingAC } from '../../redux/users-reducer';
import UsersAPIComponent from './UsersAPIComponent';

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setUserCount: (userCount) => {
            dispatch(setUserCountAC(userCount));
        },
        toogleIsFetching: (isFetching) => {
            dispatch(isFetchingAC(isFetching));
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;