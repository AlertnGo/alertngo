import styles from "./main.module.scss";
import { useState } from "react";
import {
  Center,
  SegmentedControl,
  Box,
  rem,
  NavLink,
  Input,
  Group,
  Button,
  Space,
} from "@mantine/core";
import {
  IconAt,
  IconHome2,
  IconHeart,
  IconQrcode,
  IconUser,
  IconScan,
  IconSearch,
} from "@tabler/icons-react";

export default function Main() {
  const [currentTab, setCurrentTab] = useState("Search");

  return (
    <main className={styles.main}>
      <section className={styles.mainGride}>
        <div className={styles.left}>
          <NavLink
            label="Accueil"
            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
          />
          <NavLink
            label="Mes codes"
            leftSection={<IconQrcode size="1rem" stroke={1.5} />}
          />
          <NavLink
            label="Favoris"
            leftSection={<IconHeart size="1rem" stroke={1.5} />}
          />
          <NavLink
            label="Profil"
            leftSection={<IconUser size="1rem" stroke={1.5} />}
          />
        </div>

        <div className={styles.right}>
          <SegmentedControl
            value={currentTab}
            onChange={setCurrentTab}
            data={[
              {
                value: "Scan",
                label: (
                  <Center>
                    <IconScan style={{ width: rem(16), height: rem(16) }} />
                    <Box ml={10}>Scan</Box>
                  </Center>
                ),
              },
              {
                value: "Search",
                label: (
                  <Center>
                    <IconSearch style={{ width: rem(16), height: rem(16) }} />
                    <Box ml={10}>Search</Box>
                  </Center>
                ),
              },
            ]}
          />

          <Space h="md" />

          {currentTab == "Search" ? (
            <div className={styles.scan}>
              Malheuresment , la fonctionnalité de scan n'est pas encore
              disponible sur le site web. mais vous pouvez toujours utiliser
              l'application mobile.
            </div>
          ) : (
            <div className={styles.search}>
              <Group w={"100%"}>
                <Input
                  leftSection={<IconAt size={16} />}
                  placeholder="Nom d'utilisateur"
                />
                <Button>Search</Button>
              </Group>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
