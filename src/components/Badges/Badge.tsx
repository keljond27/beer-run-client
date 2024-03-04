import { Image, Stack } from 'react-bootstrap';

import styles from './Badge.module.css';

interface BadgeProps {
  badge: string;
  title: string;
}

const Badge = (props: BadgeProps) => {
  const { badge, title } = props;

  const handleOnClick = () => {
    console.log(title)
  }

  return (
      <Stack gap={2}>
        <Image className={styles.badge} src={badge} onClick={handleOnClick} />
        <div className={styles.badge_title}>{title}</div>
      </Stack>
  )
}
export default Badge
