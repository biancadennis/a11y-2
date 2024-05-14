import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.contentWrapper}>
        <div>
          <h1>We &lt;3 a11y</h1>
          <img alt="" src="https://developer.apple.com/assets/elements/icons/accessibility/accessibility-128x128_2x.png" />
        </div>
        <p>
          <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines</a> (WCAG) 2 is developed through the W3C process in cooperation with individuals and organizations around the world, with a goal of providing a single shared standard for web content accessibility that meets the needs of individuals, organizations, and governments internationally.
        </p>
      </div>
    </div>
  );
}
