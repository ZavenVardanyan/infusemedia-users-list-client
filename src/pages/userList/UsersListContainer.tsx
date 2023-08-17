import React, { useState, useEffect } from 'react';
import UsersList from './UsersList';
import { API_URL as api } from '../../globals';
import { GET_USERS as route } from './globals/routes';

export interface UsersListType {
    fullName: string,
    email: string,
    age: number,
    gender: string,
    subscribed: boolean
}

const UsersListContainer: React.FC = () => {
    const [usersList, setUsersList] = useState<UsersListType[]>([]);

    useEffect(() => {
        fetch(api + route)
            .then(response => response.json())
            .then(data => {
                setUsersList(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <UsersList list={usersList} />
    );
}

export default UsersListContainer