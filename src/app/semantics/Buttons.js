'use client'
import Image from "next/image";
// import styles from "./Tables.module.css";
import styles from "../page.module.css";

export default function Buttons({ headingElem: HeadingElem, className }) {
    const handleClick = (e, message = 'Semantic HTML is the best!') => alert(message)
    return (
        <div className={`${styles.main} ${className}`} id="buttons">
            <div>
                <HeadingElem>Buttons</HeadingElem>
                <div className={styles.grid}>
                    <h3 className="goodish">Semantic HTML</h3>
                    <button onClick={handleClick}>Click Me!</button>
                </div>
                <div>
                    <h3 className="bad">NonSemantic HTML</h3>
                    <div onClick={() => handleClick(null, 'yikes not accessible at all')}>Click Me!</div>
                </div>
                <div>
                    <h3 className="bad">NonSemantic HTML with accessibility improvements for keyboard</h3>
                    <div tabIndex="0" onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === 'Space') {
                            handleClick(null, 'better for keyboards, not screen readers')
                        }
                    }} onClick={() => handleClick(null, 'yikes not accessible at all')}>Click Me!</div>
                </div>
                <div>
                    <h3 className="bad">NonSemantic HTML with accessibility improvements for screen reader</h3>
                    <div role="button" onClick={() => handleClick(null, 'accessible-ish for screen readers, not great for keyboards')}>Click Me!</div>
                </div>
                <div>
                    <h3 className="goodish">NonSemantic HTML with accessibility improvements for screen reader and keyboard</h3>
                    <div tabIndex="0" role="button" onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === 'Space') {
                            handleClick(null, 'better for keyboards, not screen readers')
                        }
                    }} onClick={() => handleClick(null, 'accessible-ish for screen readers, not great for keyboards')}>Click Me!</div>
                </div>
            </div>
        </div>
    );
}
