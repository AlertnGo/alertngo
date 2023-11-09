import styles from "./main.module.scss";
import { useState } from "react";
import { NavLink } from "@mantine/core";
import {
  IconHome2,
  IconHeart,
  IconQrcode,
  IconUser,
  IconUserScan,
} from "@tabler/icons-react";
import MainComponentOne from "./mainComponentOne";

export default function Main() {
  const [currentMode, setCurrentMode] = useState(1);
  return (
    <main className={styles.main}>
      <section className={styles.mainGride}>
        <div className={styles.left}>
          <NavLink
            onClick={() => setCurrentMode(1)}
            label="Trouver"
            leftSection={<IconUserScan size="1rem" stroke={1.5} />}
          />
          <NavLink
            onClick={() => setCurrentMode(2)}
            label="Mes Codes"
            leftSection={<IconQrcode size="1rem" stroke={1.5} />}
          />
          <NavLink
            onClick={() => setCurrentMode(3)}
            label="Favoris"
            leftSection={<IconHeart size="1rem" stroke={1.5} />}
          />
          <NavLink
            onClick={() => setCurrentMode(4)}
            label="Profil"
            leftSection={<IconUser size="1rem" stroke={1.5} />}
          />
        </div>

        <div className={styles.right}>
          {
            {
              1: <MainComponentOne />,
              2: <div>2</div>,
              3: <div>3</div>,
              4: <div>4</div>,
            }[currentMode]
          }
        </div>
      </section>
    </main>
  );
}
