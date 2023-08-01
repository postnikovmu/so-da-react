import { SearchOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';

function App() {

    const items = [
        {
            label: (
                <a href="http://127.0.0.1:5173/" target="_blank" rel="noopener noreferrer">
                    Home
                </a>
            ),
            icon: <SearchOutlined />,
            key: 'home',
        },
    ];
    const [current, setCurrent] = useState('home');

    function onClick() {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;