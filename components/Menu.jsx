
import Link from 'next/link';
import React from 'react';

const Menu = () => {
    return (
        <div className='mainmenu'>
            <div className='logo'>
                <h1>Logo</h1>
            </div>
            <ul>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/product"}>Product</Link>
                <Link href={"/blog"}>Blog</Link>
                <Link href={"/contact"}>Contact</Link>
                <Link href={"/profile"}>Profile</Link>
            </ul>
        </div>
    );
};

export default Menu;