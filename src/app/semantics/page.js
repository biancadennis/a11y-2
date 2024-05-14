import Image from "next/image";
import styles from "../page.module.css";
import Buttons from './Buttons'
import Tables from './Tables'


const SUB_HEADING = 'h2'
export default function Semantics() {
    return (
        <div className={styles.main}>
            <div>
                <h1>Semantic vs NonSemantic HTML</h1>
                <nav className={styles.nav}>
                    <a href="/semantics/#tables">Tables</a>
                    <a href="/semantics/#buttons">Buttons</a>
                </nav>
                <Tables className={styles.fullHeight} headingElem={SUB_HEADING} />
                <Buttons className={styles.fullHeight} headingElem={SUB_HEADING} />
            </div>
        </div>
    );
}
