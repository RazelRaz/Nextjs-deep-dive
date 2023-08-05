
'use client'

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'

const Menu = () => {

    let currentPath = usePathname();

    return (
        <div className='mainmenu'>
            <div className='logo'>
                <h1>Logo</h1>
            </div>
            <ul>
                <Link className={currentPath === '/' ? 'active' : ''} href={"/"}>Home</Link>
                <Link className={currentPath === '/about' ? 'active' : ''} href={"/about"}>About</Link>

                <Link className={currentPath === '/product' ? 'active' : ''} 
                href={{pathname:'/product', query:{name:'book', price:'$1234'}}}>
                    Product
                </Link>

                <Link className={currentPath === '/blog' ? 'active' : ''} href={"/blog"}>Blog</Link>
                <Link className={currentPath === '/contact' ? 'active' : ''} href={"/contact"}>Contact</Link>
                <Link className={currentPath === '/profile' ? 'active' : ''} href={"/profile"}>Profile</Link>
            </ul>
        </div>
    );
};

export default Menu;