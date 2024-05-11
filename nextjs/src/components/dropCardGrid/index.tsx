import styles from "@/styles/DropCardGrid.module.scss"
import DropCard from "../dropCard"

export default function DropCardGrid() {
    const airdrops = [
        { id: 1, imagePath: "shirt.png", title: "50% OFF na Camisa 2024" },
        { id: 2, imagePath: "ticket.png", title: "1 ingresso grátis" },
        { id: 3, imagePath: "player.png", title: "Passe o dia com o jogador Fulano" },
        { id: 4, imagePath: "meet.png", title: "Encontro exclusivo na sede" },
        { id: 5, imagePath: "character.png", title: "Boneco personalizado" },
    ]
    return(
        <div className={styles.dropCardGridWrapper}>
            {
                airdrops.map(drop => (
                    <DropCard key={drop.id} imagePath={drop.imagePath} title={drop.title} />
                ))
            }
        </div>
    )
}