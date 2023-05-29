import { useState } from 'react';
import styles from './burger.module.scss'
import {NavLink} from "react-router-dom";


const BurgerMenu = () => {

    const [isOpen, setIsOpen] = useState(false);


    const handleToggle = () => {
        setIsOpen(!isOpen);
    }



    const items = [
        {
            id: 1,
            item: 'List 1',
            link: '/'
        },

        {
            id: 2,
            item: 'List 2',
            link: '/page2'
        },

        {
            id: 3,
            item: 'List 3',
            link: '/page3'
        },
    ]


    return (

        <>
            <button className={styles.burger} onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        {isOpen && (
            <nav className={styles.menu}>
                <ul>
                    {
                        items.map((item) => {
                            return <li key={item.id}><NavLink to={item.link}>{item.item}</NavLink></li>
                        })
                    }
                </ul>
            </nav>
        )}
        </>
    )
};

export default BurgerMenu;