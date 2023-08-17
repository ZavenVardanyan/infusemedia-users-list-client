import React from 'react';
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
} from 'antd';
import PageHeader from '../../sharedComponents/PageHeader/PageHeader';
import { API_URL as api } from '../../globals';
import { ADD_USER as addUser } from './globals/routes';

interface UsersFromProps {
    className?: string
}

const ageOptions = [
    '>20',
    '20-60',
    '>61'
]

const UsersForm: React.FC<UsersFromProps> = () => {

    const onFinish = (values: any) => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        };

        fetch(api + addUser, requestOptions)
            .then(response => response.json())
            .then(() => {
                window.location.reload()
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    return (
        <div className='users-form'>
            <PageHeader title='Complete the form:'/>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                onFinish={onFinish}
            >
                <Form.Item name='fullName'>
                    <Input />
                </Form.Item>
                <Form.Item name='email'>
                    <Input />
                </Form.Item>
                <Form.Item name='age'>
                    <Select>
                        {
                            ageOptions.map((item) => (
                                <Select.Option value={item} key={item}>{item}</Select.Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Form.Item label="Gender" name='gender'>
                    <Radio.Group>
                        <Radio value="male"> Male </Radio>
                        <Radio value="female"> Female </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="subscribed" valuePropName="checked">
                    <Checkbox>Subscribe me</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>Submit</Button>
                </Form.Item>
            </Form>
        </div>

    )
}

export default UsersForm