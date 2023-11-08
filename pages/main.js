import styles from "./main.module.scss";
import { Center, SegmentedControl, Box, rem, NavLink } from "@mantine/core";
import {
  IconHome2,
  IconHeart,
  IconQrcode,
  IconUser,
  IconScan,
  IconSearch,
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
            label="My Codes"
            leftSection={<IconQrcode size="1rem" stroke={1.5} />}
          />
          <NavLink
            label="Favorites"
            leftSection={<IconHeart size="1rem" stroke={1.5} />}
          />
          <NavLink
            label="Profile"
            leftSection={<IconUser size="1rem" stroke={1.5} />}
          />
        </div>

        <div className={styles.right}>
          <SegmentedControl
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
        </div>
      </section>
    </main>
  );
}
