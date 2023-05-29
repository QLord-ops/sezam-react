import styles from './answer.module.scss'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {faFacebook, faTelegram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Parallelogram from "../Parallelogram/Parallelogram.jsx";

const Answer = () => {
    return (
        <section className={styles.answer}>
            <Container style={{maxWidth: '1248px'}}>
                <h3>Ответим на ваши вопросы</h3>
                <div style={{display: 'flex', gap: '15px', justifyContent: 'center', padding: '40px'}}>
                    <Parallelogram/>
                    <Parallelogram/>
                    <Parallelogram/>
                    <Parallelogram/>
                </div>
                <Row style={{gap: '30px'}}>
                    <Col xxl="5">
                        <input type="text" placeholder="Имя"/>
                    </Col>
                    <Col xxl="5">
                        <input type="phone" placeholder="Телефон"/>
                    </Col>
                    <Col xxl="8">
                        <textarea placeholder="Вопрос по дизайну, тю"/>
                    </Col>
                    <Col xxl="3">
                        <ul style={
                            {
                                display: 'flex',
                                gap: '15px',
                                flexDirection: 'column'
                            }
                        }
                        >
                            <li>
                                <Link to="https://t.me" target="_blank">
                                    <FontAwesomeIcon className={styles.fontAwesomeIcon} icon={faTelegram}
                                                     style={{color: "#00070c"}}/>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://t.me" target="_blank">
                                    <FontAwesomeIcon className={styles.fontAwesomeIcon} icon={faYoutube}
                                                     style={{color: "#a20101"}}/>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://facebook.com" target="_blank">
                                    <FontAwesomeIcon className={styles.fontAwesomeIcon} icon={faFacebook}
                                                     style={{color: "#001bb9"}}/>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xxl="6">
                        <button className={styles.btn}>Отправить</button>
                    </Col>
                    <Col xxl="12">
                            <Row>
                                <Col xxl="6" style={{display: 'flex', alignItems: 'center', gap: '30px', color: '#fff'}}>
                                    <FontAwesomeIcon icon={faLocation} beat  style={{width: '40px', height: '40px'}}/>
                                    <span>Zaebalo</span>
                                </Col>
                                <Col xxl="6" style={{display: 'flex', gap: '15px'}}>
                                    <Link to="tel:+38099999999">+38099999999</Link>
                                    <Link to="mailto:g@gmail.com">sosamba</Link>
                                </Col>
                            </Row>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Answer;