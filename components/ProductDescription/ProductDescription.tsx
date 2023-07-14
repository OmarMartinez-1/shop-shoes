import styles from './productDescription.module.css'

const descriptionOfShoe = {
    color: 'Color Morado.',
    recomendation: 'Recomendado para Casual.',
    aboutAppearanceImg: 'Los colores originales del producto pueden variar al de la imagen por cuestiones de resolución, brillo y/o luces.',
    constructionMaterials: 'Construcción superior de material sintético que brinda comodidad.',
    adjustmentSystem: 'Sistema de ajuste con cordones.',
    solesShoe: 'Suela de goma para mayor durabilidad y tracción sobre la superficie.',
    toguelShoe: 'Lengüeta para mayor comodidad.',
    shoeNeck: 'Cuello alto.',
    hola: 'hlamuando',
    pai: 'hfap',
    dos: 'fsf',
}

const {
    color,
    recomendation,
    aboutAppearanceImg,
    constructionMaterials,
    adjustmentSystem,
    solesShoe,
    toguelShoe,
    shoeNeck, hola, pai, dos } = descriptionOfShoe

const iterableDes = [
    color, recomendation, aboutAppearanceImg, constructionMaterials, adjustmentSystem,
    solesShoe,
    toguelShoe,
    shoeNeck,
]


export default function ProductDescription() {
    return (
        <div className={styles.descriptionArea}>

            <div className={styles.header}>
                Description

            </div>
            <div className={styles.containerDescription}>
                <ul className={styles.columnDescription}>

                    {iterableDes.map((n) =>
                        <li key={n} className={styles.descriptionItem}>
                            <div className={styles.script}>-</div> <div>{n}</div>
                        </li>)
                    }

                </ul>
            </div>

        </div>
    )
}