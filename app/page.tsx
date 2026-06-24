import Image from "next/image";
import Logo from "@/components/Logo";
import styles from "./page.module.css";
import xBackground from "@/public/x-background.png";

export default function Home() {
  return (
    <main className={styles.stage}>
      {/* Large decorative chevron from the BX mark */}
      <div className={styles.xBackground} aria-hidden="true">
        <Image
          src={xBackground}
          alt=""
          priority
          sizes="(max-width: 810px) 100vw, 1104px"
          className={styles.xImage}
        />
      </div>

      <div className={styles.pageWidth}>
        <div className={styles.container}>
          <div className={styles.box}>
            <Logo className={styles.logo} />
            <h1 className={styles.heading}>Coming Soon</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
