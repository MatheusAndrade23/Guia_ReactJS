import styles from './Home.module.css'

import logo from "../../images/logo512.png"

function Home() {
    return (
        <div className={styles.container}>
            <h1>Guia ReactJS + NextJS</h1>
            <img src={logo} alt="logo_react"/>
        </div>
    )
}

export default Home;