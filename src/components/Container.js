import styles from './Container.module.css'

const Container = ({ children }) => {
  return <nav className={styles.container}>{children}</nav>
}

export default Container
