import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { UsersListType } from '../UsersListContainer';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { DELETE_USER as deleteRoute } from './routes';
import { API_URL as api } from '../../../globals';

const deleteUser = (id: number) => {
    const requestOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    };

    fetch(api + deleteRoute + id, requestOptions)
        .then(response => response.json())
        .then(() => {
            window.location.reload()
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

export const columns: ColumnsType<UsersListType> = [
    {
        title: ' ',
        dataIndex: '',
        key: 'delete',
        render: (row) => (
            <Button
              type="link"
              onClick={() => deleteUser(row.id)}
              icon={<DeleteOutlined />}
            />
          ),
    },
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'Full name',
        dataIndex: 'fullName',
        key: 'fullName'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender'
    },
    {
        title: 'Subscribe',
        dataIndex: 'subscribed',
        key: 'subscribed',
        render: (row: boolean) => row ? 'Yes' : 'No'
    }
]