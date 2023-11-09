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
          Alertngo is a web application that allows users to communicate with
          other people with the help of our Qr code.
        </p>

        <Group>
          <Input
            icon={<IconAt />}
            variant="filled"
            placeholder="Your email Here"
            size="md"
          />
          <Button>Join Waitlist</Button>
        </Group>
        <Space h="md" />
        <Link href="/main">
          <Button>App</Button>
        </Link>
      </section>
    </main>
  );
}
