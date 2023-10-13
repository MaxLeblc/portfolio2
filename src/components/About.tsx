import styles from "../styles/About.module.scss"
import { GrMail } from "react-icons/gr"
import { FaGithub, FaLinkedinIn, FaPortrait } from "react-icons/fa"

export default function About() {
    return (
        <div className={styles.container} id="about">
            <div className={styles.intro}>
                <h1>Frontend<br />Développeur</h1>
                <p>Salut ! Je suis Maxime, développeur Web & Mobile. J’ai acquis de solides compétences professionnelles pour avoir travaillé plus de dix années dans divers secteurs d’entreprises.</p>
                <p>Curieux et soucieux d’associer mon métier à l’enrichissement de mes connaissances et de participer à l’intelligence collective d’un projet, j’ai à coeur de m’investir pour la Tech.</p>
            </div>
            <div className={styles.slidersA}>
                <div className={styles.sliderLeft}>
                    <p>Maxime Leblanc.</p>
                    <p>Maxime Leblanc.</p>
                    <span style={{ color: "#f15454" }}>Maxime Leblanc.</span>
                    <p>Maxime Leblanc.</p>
                </div>
                <div className={styles.sliderLeft}>
                    <p>Maxime Leblanc.</p>
                    <p>Maxime Leblanc.</p>
                    <span style={{ color: "#f15454" }}>Maxime Leblanc.</span>
                    <p>Maxime Leblanc.</p>
                </div>
            </div>
            <div className={styles.slidersB}>
                <div className={styles.sliderRight}>
                    <p>Développeur Frontend.</p>
                    <p>Développeur Frontend.</p>
                    <span style={{ color: "#f15454" }}>Développeur Frontend.</span>
                    <p>Développeur Frontend.</p>
                </div>
                <div className={styles.sliderRight}>
                    <p>Développeur Frontend.</p>
                    <p>Développeur Frontend.</p>
                    <span style={{ color: "#f15454" }}>Développeur Frontend.</span>
                    <p>Développeur Frontend.</p>
                </div>
            </div>
            <div className={styles.about}>
                <p>Après 7 années d'expérience dans la gestion des produits d'assurance et 5 années dans le design graphique, j'ai décidé de faire évoluer ma carrière vers le developpement web.</p>
                <p>Alumni du coding bootcamp de La Capsule Paris, je suis aujourd'hui développeur full-stack junior à Paris.</p>
                <p>Sorti diplomé d'un titre RNCP de niveau 6 "Chef de projet d'application web & mobile", je poursuis mon apprentissage en étant, en parallèle,
                    teacher assistant dans le bootcamp qui m'a formé. De ce fait, j'accompagne les élèves dans leurs problématiques liées au code
                    et je les aide aussi à se débugger.</p>
                <p>Vous trouverez sur mon portfolio, mon stack ainsi que certains projets réalisés notamment en React & React-Native.</p>
                <p>Je suis actuellement à la recherche d'un poste alors n'hésitez pas à me contacter pour que nous puissions échanger ensemble !</p>
            </div>
            <div className={styles.links}>
                <img src="../../public/links_arrow.svg" alt="links_arrow" />
                <a href="https://github.com/MaxLeblc" target="_blank" title="Mon GitHub"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/maxime-leblanc-dev/" target="_blank" title="Mon LinkedIn"><FaLinkedinIn /></a>
                <a href="mailto:maxime.leb@gmail.com" target="_blank" title="Me contacter par mail"><GrMail /></a>
                <a href="./src/assets/maxime_leblanc_cv.pdf" download target="_blank" title="Mon CV"><FaPortrait /></a>
            </div>
        </div>
    )
}