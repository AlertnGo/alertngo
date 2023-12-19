// header
import Link from "next/link";
import styles from "./header.module.scss";
import { Button, Drawer, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <header className={styles.header}>
      <Link href="/">
        <img src="logo.svg" alt="logo" />
      </Link>
      <nav className={styles.menuPc}>
        <Link href="/main">App</Link>
        <Link href="/price">Prix</Link>
        <Link href="/signin">
          <Button variant="outline">Se connecter</Button>
        </Link>
        <Link href="/login">
          <Button>S'inscrire </Button>
        </Link>
      </nav>

      <Burger
        className={styles.menuPhone}
        opened={opened}
        onClick={open}
        aria-label="Toggle navigation"
      />
      <Drawer opened={opened} onClose={close} title="Menu">
        <div className={styles.menulist}>
          <Link href="/main" onClick={close}>
            App
          </Link>
          <Link href="/price" onClick={close}>
            Prix
          </Link>
          <Link href="/signin" onClick={close}>
            Se connecter
          </Link>
          <Link href="/login" onClick={close}>
            S'inscrire
          </Link>
        </div>
      </Drawer>
    </header>
  );
}
