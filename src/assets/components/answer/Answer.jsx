import styles from './answer.module.scss'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {faTelegram} from '@fortawesome/free-solid-svg-icons'

const Answer = () => {
    return (
        <section className={styles.answer}>
            <Container style={{ maxWidth: '1248px'}}>
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
                    <Col xxl="4">
                        <ul>
                            <li>
                                <Link to="https://t.me">
                                    <FontAwesomeIcon icon={faTelegram} />
                                </Link>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Answer;