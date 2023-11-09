import styles from "./main.module.scss";
import { useState } from "react";

import {
  Center,
  SegmentedControl,
  Box,
  rem,
  Input,
  Group,
  Button,
  Space,
} from "@mantine/core";
import { IconAt, IconScan, IconSearch } from "@tabler/icons-react";

export default function MainComponentOne() {
  const [currentTab, setCurrentTab] = useState("Search");

  return (
    <div>
      <SegmentedControl
        value={currentTab}
        onChange={setCurrentTab}
        data={[
          {
            value: "Scan",
            label: (
              <Center>
                <IconScan style={{ width: rem(16), height: rem(16) }} />
                <Box ml={10}>Scanner</Box>
              </Center>
            ),
          },
          {
            value: "Search",
            label: (
              <Center>
                <IconSearch style={{ width: rem(16), height: rem(16) }} />
                <Box ml={10}>Rechercher</Box>
              </Center>
            ),
          },
        ]}
      />
      <Space h="md" />
      {currentTab == "Search" ? (
        <div className={styles.search}>
          <Group w={"100%"}>
            <Input
              leftSection={<IconAt size={16} />}
              placeholder="Nom d'utilisateur"
            />
            <Button>Search</Button>
          </Group>
        </div>
      ) : (
        <div className={styles.scan}>
          Malheuresment , la fonctionnalité de scan n'est pas encore disponible
          sur le site web. mais vous pouvez toujours utiliser l'application
          mobile.
        </div>
      )}
    </div>
  );
}
