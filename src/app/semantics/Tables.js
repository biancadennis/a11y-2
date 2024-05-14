import Image from "next/image";
import styles from "./Tables.module.css";
import pageStyles from "../page.module.css"

const jurassic_1 = {
    title: 'Jurassic Park',
    year: '1993',
    runtime: '2h 7m',
    director: 'Steven Spielberg',
}

const jurassic_2 = {
    title: 'The Lost World: Jurassic Park',
    year: '1997',
    runtime: '2h 9m',
    director: 'Steven Spielberg',
}
const jurassic_3 = {
    title: 'Jurassic Park III',
    year: '2001',
    runtime: '1h 32m',
    director: 'Joe Johnston',
}

const movies = [
    jurassic_1,
    jurassic_2,
    jurassic_3,
]

export default function Tables({ headingElem: HeadingElem, className }) {
    return (
        <div className={`${styles.main} ${className}`} id="tables">
            <div>
                <HeadingElem>Tables</HeadingElem>
                <div className={styles.grid}>
                    <h3 className="goodish">Semantic HTML</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>title</th>
                                <th>year</th>
                                <th>director</th>
                                <th>runtime</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map(movie => (
                                <tr key={movie.title}>
                                    <td>{movie.title}</td>
                                    <td>{movie.year}</td>
                                    <td>{movie.director}</td>
                                    <td>{movie.runtime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h3 className="bad">NonSemantic HTML</h3>
                    <div className={styles.table}>
                        <div className={styles.row}>
                            <div className={styles.tableHeading}>title</div>
                            <div className={styles.tableHeading}>year</div>
                            <div className={styles.tableHeading}>director</div>
                            <div className={styles.tableHeading}>runtime</div>
                        </div>
                        {movies.map(movie => (
                            <div key={movie.title} className={styles.row}>
                                <div className={styles.tableData}>{movie.title}</div>
                                <div className={styles.tableData}>{movie.year}</div>
                                <div className={styles.tableData}>{movie.director}</div>
                                <div className={styles.tableData}>{movie.runtime}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="accessibleish">NonSemantic HTML with accessibility improvements (ARIA)</h3>
                    <a className={pageStyles.resource} href="https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/table/">Information on accessible tables</a>
                    <div className={styles.table} role="table">
                        <div className={styles.row} role="row">
                            <div className={styles.tableHeading} role="columnheader">title</div>
                            <div className={styles.tableHeading} role="columnheader">year</div>
                            <div className={styles.tableHeading} role="columnheader">director</div>
                            <div className={styles.tableHeading} role="columnheader">runtime</div>
                        </div>
                        {movies.map(movie => (
                            <div key={movie.title} className={styles.row} role="row">
                                <div className={styles.tableData} role="cell">{movie.title}</div>
                                <div className={styles.tableData} role="cell">{movie.year}</div>
                                <div className={styles.tableData} role="cell">{movie.director}</div>
                                <div className={styles.tableData} role="cell">{movie.runtime}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
