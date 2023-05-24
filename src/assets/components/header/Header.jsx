import React from 'react';
import styles from "./style.module.scss"
import headerImg from "../../image/headerImage.png"
import {Container} from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <div className={styles.header__img}>
                <img src={headerImg} alt=""/>
            </div>
               <Container>

               </Container>
        </header>
    );
};

export default Header;