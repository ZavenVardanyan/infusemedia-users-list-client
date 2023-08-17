import React from 'react';
import UsersForm from "./UsersForm"
import UsersTable from './UsersTable';
import './usersList.css'
import { UsersListType } from './UsersListContainer';
import PageContainer from '../../sharedComponents/PageContainer/PageContainer';

interface UsersListProps {
    list: UsersListType[]
}

const UsersList: React.FC<UsersListProps> = (props: UsersListProps) => {
    const { list } = props

    return (
        <PageContainer>
            <div className='users-list-container'>
                <UsersForm className='users-form'/>
                <UsersTable data={list} className='users-table' />
            </div>
        </PageContainer>
    )
}

export default UsersList