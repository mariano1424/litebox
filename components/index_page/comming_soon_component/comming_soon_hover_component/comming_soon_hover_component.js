import { motion } from 'framer-motion';
import styles from './styles.module.scss';

const CommingSoonHoverComponent = ({movieData}) => {
    return (
        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={styles.container}>

            <div className={styles.button_container}>
                <img src="/images/add-list.svg" className={`${styles.image} ${styles.play_image}`} />
                <img src="/images/ok.svg" className={styles.image} />
            </div>
            <div className={styles.play_button_container}>
                <img src="/images/play.svg" className={styles.middle_image} />
            </div>
            <div className={styles.bottom_container}>
                <span className={styles.title}>{movieData.title}</span>
                <span className={styles.description}>
                    98% de coincidencia <span className={styles.movie_year}>{movieData.adult ? '+18' : 'APT'}</span> 1h 30 min
                </span>
                <span className={styles.movie_type}>Suspenso</span>
            </div>
        </motion.div>
    )
}

export default CommingSoonHoverComponent;