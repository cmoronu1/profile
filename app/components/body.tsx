import Image from "next/image";
import styles from "./body.module.css";

export function Body() {
  return (
    <div className={styles.container}>
      <Image
        src={'/images/mypicture.jpeg'}
        alt="My Picture"
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.backgroundImage}
      />
      This is a test
    </div>
  );
}
