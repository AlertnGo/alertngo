import styles from "./index.module.scss";
import Link from "next/link";
import { Input, Button, Group, Space } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Alertngo</h1>
        <p>
          Alertngo est une application web qui permet aux utilisateurs de
          communiquer avec d'autres personnes à l'aide d'un code Qr. avec
          d'autres personnes à l'aide de notre code Qr.
        </p>

        <Group>
          <Input
            icon={<IconAt />}
            variant="filled"
            placeholder="Votre email Ici"
            size="md"
          />
          <Button size="md">S'inscrire sur la liste d'attente</Button>
        </Group>
        <Space h="md" />
        <Link href="/main">
          <Button variant="outline">voir l'application</Button>
        </Link>
      </section>
    </main>
  );
}
