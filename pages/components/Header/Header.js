// header
import Link from "next/link";
import styles from "./header.module.scss";
import { Button } from "@mantine/core";
import Toggle from "../Theme/themeToggle";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img src="logo.svg" alt="logo" />
      </Link>
      <nav>
        <Link href="/main">
          <Button variant="transparent">App</Button>
        </Link>
        <Link href="/price">
          <Button variant="transparent">Prix</Button>
        </Link>
        <Link href="/signin">
          <Button variant="outline">Se connecter</Button>
        </Link>
        <Link href="/login">
          <Button>S'inscrire </Button>
        </Link>
      </nav>
    </header>
  );
}
