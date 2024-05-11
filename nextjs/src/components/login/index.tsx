import styles from "@/styles/Login.module.scss"
import Link from "next/link"
import { useState } from "react"

export default function Login () {
    const [existingUserCPF, setExistingUserCPF] = useState("")
    const [associatedNumber, setAssociatedNumber] = useState("")
    const [newUserCPF, setNewUserCPF] = useState("")
    
    return(
        <div className={styles.loginWrapper}>
            <div className={styles.oldUserLoginFormWrapper}>
                <div className={styles.inputWrapper}>
                    <span>CPF</span>
                    <input placeholder="Digite seu CPF" value={existingUserCPF} onChange={e => setExistingUserCPF(e.target.value)}></input>
                </div>

                <div className={styles.inputWrapper}>
                    <span>Matrícula de sócio</span>
                    <input placeholder="Digite aqui sua matrícula" value={associatedNumber} onChange={e => setAssociatedNumber(e.target.value)}></input>
                </div>

                <Link href="/myDrops" className={styles.link}>
                    <button>Entrar</button>
                </Link>
            </div>

            <div className={styles.newUserLoginFormWrapper}>
                <h2>Primeiro acesso?</h2>
                <h3>Digite seu CPF e confira os drops disponíveis para você</h3>
                
                <div className={styles.inputWrapper}>
                    <span>CPF</span>
                    <input placeholder="Digite seu CPF" value={newUserCPF} onChange={e => setNewUserCPF(e.target.value)}></input>
                </div>

                <Link href="/myDrops" className={styles.link}>
                    <button id={styles.seeDropsBtn}>Ver drops</button>
                </Link>
            </div>
        </div>
    )
}