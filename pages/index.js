import styles from "./index.module.scss";
import Link from "next/link";
import { Input, Button, Group } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <h1>Alertngo</h1>
        <p>
          Alertngo is a web application that allows users to communicate with
          other people with the help of our Qr code.
        </p>

        <Input
          icon={<IconAt />}
          variant="filled"
          placeholder="Your email Here"
          size="md"
        />
        <Group>
          {" "}
          <Button>Join Waitlist</Button>
          <Link href="/main">
            <Button>App</Button>
          </Link>
        </Group>
      </section>
    </main>
  );
}
