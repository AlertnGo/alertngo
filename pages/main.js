import styles from "./main.module.scss";
import { Badge, NavLink } from "@mantine/core";
import {
  IconHome2,
  IconGauge,
  IconChevronRight,
  IconActivity,
  IconCircleOff,
} from "@tabler/icons-react";

export default function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.mainGride}>
        <div className={styles.left}>
          <NavLink
            label="Home"
            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
          />
          <NavLink
            label="With icon"
            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
          />
          <NavLink
            label="With icon"
            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
          />
          <NavLink
            label="With icon"
            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
          />
        </div>

        <div>content</div>
      </section>
    </main>
  );
}
