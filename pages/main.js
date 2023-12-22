import styles from "./main.module.scss";
import { useState } from "react";
import { NavLink, Link } from "@mantine/core";
import { useRouter } from "next/router";
import {
  IconHeart,
  IconQrcode,
  IconUser,
  IconUserScan,
} from "@tabler/icons-react";
import MainScan from "./mainComponents/mainScan";
import MainUser from "./mainComponents/mainUser";
import MainCode from "./mainComponents/mainCode";
import MainFavourite from "./mainComponents/mainFavourite";

export default function Main() {
  const router = useRouter();
  const [currentMode, setCurrentMode] = useState(1);
  return (
    <>
      <div className={styles.mobileNav}>
        <IconUserScan
          onClick={() => router.push("/main?mode=1")}
          size="30px"
          stroke={1.5}
          color={currentMode === 1 ? "#218BE6" : "#00000082"}
        />

        <IconQrcode
          onClick={() => router.push("/main?mode=2")}
          size="30px"
          stroke={1.5}
          color={currentMode === 2 ? "#218BE6" : "#00000082"}
        />
        <IconHeart
          onClick={() => router.push("/main?mode=3")}
          size="30px"
          stroke={1.5}
          color={currentMode === 3 ? "#218BE6" : "#00000082"}
        />
        <IconUser
          onClick={() => router.push("/main?mode=4")}
          size="30px"
          stroke={1.5}
          color={currentMode === 4 ? "#218BE6" : "#00000082"}
        />
      </div>

      <main className={styles.main}>
        <section className={styles.mainGride}>
          <div className={styles.left}>
            <NavLink
              onClick={() => router.push("/main?mode=1")}
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
              onClick={() => router.push("/main?mode=2")}
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
              onClick={() => router.push("/main?mode=3")}
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
              onClick={() => router.push("/main?mode=4")}
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
            {router.query.mode === "1" && <MainScan />}
            {router.query.mode === "2" && <MainCode />}
            {router.query.mode === "3" && <MainFavourite />}
            {router.query.mode === "4" && <MainUser />}
          </div>
        </section>
      </main>
    </>
  );
}
