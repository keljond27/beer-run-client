import { Col, Row } from 'react-bootstrap';

import Badge from './Badge';

import beer_badge from '../../assets/beer_badge.png';
import wine_badge from '../../assets/wine_badge.png';
import mead_badge from '../../assets/mead_badge.png';
import custom_badge from '../../assets/custom_badge.png';

import styles from './Badges.module.css';

const Badges = () => {

  return (
    <div>
      <Row className={styles.badges_row}>
        <Col><Badge title='Beer' badge={beer_badge} /></Col>
        <Col><Badge title='Wine' badge={wine_badge} /></Col>
      </Row>
      <Row className={styles.badges_row}>
        <Col><Badge title='Mead' badge={mead_badge} /></Col>
        <Col><Badge title='Custom' badge={custom_badge} /></Col>
      </Row>
    </div>
  )
}

export default Badges;