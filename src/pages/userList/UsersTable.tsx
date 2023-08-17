import React from 'react';
import { Table } from 'antd';
import { UsersListType } from './UsersListContainer';
import { columns } from './globals/table';
import PageHeader from '../../sharedComponents/PageHeader/PageHeader';

interface UsersTableProps {
    data: UsersListType[]
    className?: string
}

const UsersTable: React.FC<UsersTableProps> = (props: UsersTableProps) => {
    const { data } = props;

    return (
        <div className='users-table'>
            <PageHeader title='Results:' subTitle={`(${data.length} records)`} />
            <Table dataSource={data} columns={columns}/>
        </div>
    )
}

export default UsersTable