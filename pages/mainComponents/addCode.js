import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  SegmentedControl,
  useMantineTheme,
  Input,
  Space,
  Button,
} from "@mantine/core";
import {
  IconBike,
  IconCar,
  IconCat,
  IconMan,
  IconMotorbike,
  IconPlus,
} from "@tabler/icons-react";
import styles from "./mainStyle.module.scss";
import { useState } from "react";

const mockdata = [
  { title: "Voiture", icon: IconCar, color: "violet" },
  { title: "Vélo", icon: IconBike, color: "red" },
  { title: "Moto", icon: IconMotorbike, color: "indigo" },
  { title: "Personnel", icon: IconMan, color: "teal" },
  { title: "Animaux", icon: IconCat, color: "yellow" },
  { title: "Autre", icon: IconPlus, color: "cyan" },
];

export default function AddCode() {
  const theme = useMantineTheme();
  const [active, setActive] = useState("Voiture");

  const items = mockdata.map((item) => (
    <UnstyledButton
      key={item.title}
      className={styles.item}
      onClick={() => setActive(item.title)}
      style={
        active === item.title
          ? {
              border: "2px solid #4bbce592",
            }
          : {}
      }
    >
      <item.icon color={theme.colors[item.color][5]} size="2rem" />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card radius="md" className={styles.card}>
      <Input.Wrapper size="md" label="  Nom du QR code">
        <Input placeholder="Nom de code" />
      </Input.Wrapper>

      <Space h="md" />

      <Input.Wrapper size="md" label="Type du Placement">
        <SimpleGrid cols={3} mt="md">
          {items}
        </SimpleGrid>
      </Input.Wrapper>

      <Space h="md" />

      <Input.Wrapper size="md" label="Status">
        <SegmentedControl fullWidth size="sm" data={["Actif", "Pause"]} />
      </Input.Wrapper>

      <Space h="md" />

      <Button color="blue" my="md" fullWidth>
        Ajouter
      </Button>
    </Card>
  );
}
