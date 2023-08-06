'use client'
import React from 'react';
import styles from '../page.module.css'
import Menu from '@/components/Menu';


const page = () => {



    return (
        <div>
            <Menu></Menu>
            <h1 className={styles.textColor}>Contact Page</h1>
            <p className={styles.myBackground}>Lorem ipsum dolor sit amet</p>
         
        </div>
    );
};

export default page;