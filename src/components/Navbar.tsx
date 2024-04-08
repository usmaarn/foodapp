import styles from './navbar.module.css';


export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <a className={styles.appName} href="/">FoodApp</a>
        </nav>       
    )
}