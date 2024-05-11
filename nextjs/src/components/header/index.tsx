import styles from "@/styles/Header.module.scss"
import Link from "next/link"

export default function Header () {
    return(
        <header className={styles.header}>
            <div className={styles.leftSideOfHeader}>
                <Link href="/myDrops">
                    <img src="logo-horizontal.png" />
                </Link>

                <div className={styles.navigationOptions}>
                    <Link className={styles.option} href="/myDrops">Meus drops</Link>
                    <Link className={styles.option} href="/myDrops">Meu time</Link>

                </div>
            </div>

            <div className={styles.rightSideOfHeader}>
                <Link href="/myDrops">Minha conta</Link> 
            </div>
        </header>
    )
}