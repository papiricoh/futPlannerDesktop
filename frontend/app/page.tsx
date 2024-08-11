import styles from './page.module.css'
import EditSVG from '@/assets/edit.svg'
import Menhera from '@/assets/menhera.png'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/index'
import { faSoccerBall } from '@fortawesome/free-solid-svg-icons/index'

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<nav className={styles.nav}>
				<div className={styles.navButton}>
					<FontAwesomeIcon icon={faHome} className={styles.icon} />
					<div>Resumen</div>
				</div>
				<div className={styles.navButton}>
					<FontAwesomeIcon icon={faSoccerBall} className={styles.icon} />
					<div>Alineacion</div>
				</div>

			</nav>
			<main className={styles.main}>
				
			</main>
		</div>
	)
}
