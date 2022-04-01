import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css'

const NavItem = () => {
    return (
        <nav>
            <Link className='nav' to={'/'}>Home</Link>
            <Link className='nav' to={'/grand'}>GrandCompo</Link>
            <Link className='nav' to={'/parent'}>ParentCompo</Link>
            <Link className='nav' to={'/child'}>ChildCompo</Link>
        </nav>
    );
};

export default NavItem;