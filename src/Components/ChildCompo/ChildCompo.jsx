import React, { useContext } from 'react';
import { CountAPI } from '../GrandCompo/GrandCompo';

const ChildCompo = ({ count }) => {
    const [tech] = useContext(CountAPI)
    return (
        <div>
            <h1>Children</h1>
            <span>{count}</span>
            <strong>{tech}</strong>
        </div>
    );
};

export default ChildCompo;