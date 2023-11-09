// header
import Link from "next/link";
import styles from "./header.module.scss";
import { Button } from "@mantine/core";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img src="logo.svg" alt="logo" />
      </Link>
      <nav>
        <Link href="/main">App</Link>
        <Link href="/main">À propos</Link>
        <Link href="/main">Se connecter</Link>
        <Button>S'inscrire</Button>
      </nav>
    </header>
  );
}
