import styles from "@/styles/DropCard.module.scss"

export default function DropCard({ imagePath, title }: any) {
    return(
        <div className={styles.dropCardWrapper}>
            <img src={imagePath}/>
            <h3>{title}</h3>
            <button>Resgatar drop</button>
        </div>
    )
}