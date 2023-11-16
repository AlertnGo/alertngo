import styles from "./main.module.scss";
import { useState } from "react";
import { NavLink } from "@mantine/core";
import {
  IconHeart,
  IconQrcode,
  IconUser,
  IconUserScan,
} from "@tabler/icons-react";
import MainScan from "./mainComponants/mainScan";
import MainUser from "./mainComponants/mainUser";
import MainCode from "./mainComponants/mainCode";
import MainFavourite from "./mainComponants/mainFavourite";

export default function Main() {
  const [currentMode, setCurrentMode] = useState(1);
  return (
    <>
      <div className={styles.mobileNav}>
        <IconUserScan
          size="30px"
          stroke={1.5}
          onClick={() => setCurrentMode(1)}
          color={currentMode === 1 ? "#218BE6" : "#00000082"}
        />
        <IconQrcode
          size="30px"
          stroke={1.5}
          onClick={() => setCurrentMode(2)}
          color={currentMode === 2 ? "#218BE6" : "#00000082"}
        />
        <IconHeart
          size="30px"
          stroke={1.5}
          onClick={() => setCurrentMode(3)}
          color={currentMode === 3 ? "#218BE6" : "#00000082"}
        />
        <IconUser
          size="30px"
          stroke={1.5}
          onClick={() => setCurrentMode(4)}
          color={currentMode === 4 ? "#218BE6" : "#00000082"}
        />
      </div>

      <main className={styles.main}>
        <section className={styles.mainGride}>
          <div className={styles.left}>
            <NavLink
              onClick={() => setCurrentMode(1)}
              label="Trouver"
              leftSection={
                <IconUserScan
                  size="1.2rem"
                  stroke={1}
                  color={currentMode === 1 ? "#218BE6" : "#000000"}
                />
              }
            />
            <NavLink
              onClick={() => setCurrentMode(2)}
              label="Mes Codes"
              leftSection={
                <IconQrcode
                  size="1.2rem"
                  stroke={1}
                  color={currentMode === 2 ? "#218BE6" : "#000000"}
                />
              }
            />
            <NavLink
              onClick={() => setCurrentMode(3)}
              label="Favoris"
              leftSection={
                <IconHeart
                  size="1.2rem"
                  stroke={1}
                  color={currentMode === 3 ? "#218BE6" : "#000000"}
                />
              }
            />
            <NavLink
              onClick={() => setCurrentMode(4)}
              label="Profil"
              leftSection={
                <IconUser
                  size="1.2rem"
                  stroke={1}
                  color={currentMode === 4 ? "#218BE6" : "#000000"}
                />
              }
            />
          </div>

          <div className={styles.right}>
            {
              {
                1: <MainScan />,
                2: <MainCode />,
                3: <MainFavourite />,
                4: <MainUser />,
              }[currentMode]
            }
          </div>
        </section>
      </main>
    </>
  );
}
