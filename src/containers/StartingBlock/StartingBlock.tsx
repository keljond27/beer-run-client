import Badges from '../../components/Badges/Badges';
import { Container, Row, Col } from 'react-bootstrap';

import FixedNavbar from '../../components/FixedNavbar/FixedNavbar';

import styles from './StartingBlock.module.css';

const StartingBlock = () => {

  return (
    <div className={styles.test}>
      <Container>
        <Row><Col><FixedNavbar /></Col></Row>
        <Badges />
      </Container>
    </div>
  )
}

export default StartingBlock;