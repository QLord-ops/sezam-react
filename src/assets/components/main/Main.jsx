import React from 'react';
import styles from "./style.module.scss"
import {Container} from "react-bootstrap";
import SimpleSlider from "./slider/SimpleSlider";
import car from "../../image/car.png"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import carTwo from "../../image/car2.png"


const Main = () => {
    return (
        <main className={styles.main}>
            <Container>
                <div className={styles.main__achievements}>
                    <div className={styles.main__box_text}>
                        <h3>наши достижения от кубка россии до чемпионатов мира</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className={styles.main__box_grid}>
                        <div className={`container text-center ${styles.main__grid}`}>
                            <div className="row">
                                <div className="col">
                                    1 of 3
                                </div>
                                <div className="col-6">
                                    2 of 3 (wider)
                                </div>
                                <div className="col">
                                    3 of 3
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    1 of 3
                                </div>
                                <div className="col-5">
                                    2 of 3 (wider)
                                </div>
                                <div className="col">
                                    3 of 3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SimpleSlider/>
                <div className={styles.main__about}>
                    <div className={styles.main__about_text_box}>
                        <h3 className={styles.main__text}>МАТЕРИАЛЫ ОТ ЛУЧШИХ КОМПАНИЙ</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sit.</p>
                        <h3>ОПЫТНЫЕ МАСТЕРА</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, exercitationem!</p>
                        <h3>ГАРАНТИИ НА ВСЕ ВИДЫ РАБОТЫ</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, ipsa.</p>
                    </div>
                    <div className={styles.main__box_img}>
                        <img src={car} alt=""/>
                    </div>
                </div>
                <div className={styles.main__services}>
                    <h3 className={styles.main__first_text}>НАШИ УСЛУГИ</h3>
                    <div className={styles.main__box_btn}>
                        <button className={styles.main__btn_first}>ОКЛЕЙКА</button>
                        <button className={styles.main__btn_second}>ДЕТЕЙЛИНГ</button>
                    </div>
                    <div className={styles.main__cards}>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src="holder.js/100px180"/>
                            <Card.Body style={{color: 'white', background: '#1E1E1E'}}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src="holder.js/100px180"/>
                            <Card.Body style={{color: 'white', background: '#1E1E1E'}}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src="holder.js/100px180"/>
                            <Card.Body style={{color: 'white', background: '#1E1E1E'}}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src="holder.js/100px180"/>
                            <Card.Body style={{color: 'white', background: '#1E1E1E'}}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className={styles.main__info}>
                    <div className={styles.main__box_img}>
                        <img src={carTwo} alt=""/>
                    </div>
                    <div className={styles.main__about_text_box2}>
                        <h3 className={styles.main__text2}>МАТЕРИАЛЫ ОТ ЛУЧШИХ КОМПАНИЙ</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sit.</p>
                        <h3>ОПЫТНЫЕ МАСТЕРА</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, exercitationem!</p>
                        <h3>ГАРАНТИИ НА ВСЕ ВИДЫ РАБОТЫ</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, ipsa.</p>
                    </div>
                </div>
                <div className={styles.main__work}>
                    <h3>НАШИ РАБОТЫ</h3>

                </div>

            </Container>
        </main>
    );
};

export default Main;