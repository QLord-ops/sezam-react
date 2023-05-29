import React from 'react';
import styles from "./style.module.scss"
import headerImg from "../../image/headerImage.png"
import {Container, Row, Col} from "react-bootstrap";
import NavBar from "./navBar/NavBar.jsx";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className={styles.header__img}>
                <img src={headerImg} alt=""/>
            </div>
            <NavBar/>
            <Container>
                <h1 className={styles.header__title}>CAR MUSIC</h1>
                <h3 className={styles.header__about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
                    eveniet?</h3>
                <div className={styles.header__box_btn}>
                    <button type="button" className={`btn-primary ${styles.header__btn}`}>Наши услуги</button>
                </div>
                <div className={styles.header__info}>
                    <Row>
                        <Col xxl={4}>
                            <div className={styles.header__address}>
                                <address>Адрес:</address>
                                <address>Пушкинская 56</address>
                            </div>
                        </Col>
                        <Col xxl={4}>
                            <div className={styles.header__phone}>
                                <h4>Контакты:</h4>
                                <Link to="tel:+380675437969">+380675437969</Link>
                            </div>
                        </Col>
                        <Col xxl={4}>
                            <div className={styles.header__time}>
                                <h4>Режим работы:</h4>
                                <p>ПН-ПТ: 10:00 - 20:00</p>
                                <p>СБ-ВС: 12:00 - 16:00</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

        </header>
    );
};

export default Header;