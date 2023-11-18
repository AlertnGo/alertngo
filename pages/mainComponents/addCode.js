import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Group,
  useMantineTheme,
  Input,
} from "@mantine/core";
import {
  IconBike,
  IconCar,
  IconMan,
  IconMotorbike,
  IconPlus,
} from "@tabler/icons-react";
import styles from "./mainStyle.module.scss";

const mockdata = [
  { title: "Voiture", icon: IconCar, color: "violet" },
  { title: "Velo", icon: IconBike, color: "indigo" },
  { title: "Moto", icon: IconMotorbike, color: "indigo" },
  { title: "Personnel", icon: IconMan, color: "blue" },
  { title: "Autre", icon: IconPlus, color: "orange" },
];

export default function AddCode() {
  const theme = useMantineTheme();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={styles.item}>
      <item.icon color={theme.colors[item.color][6]} size="2rem" />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card radius="md" className={styles.card}>
      <Group>
        <label size="xl">
          Nom du QR code
          <Input placeholder="Nom du QR code" />
        </label>
      </Group>
      <Group justify="space-between">
        <Text size="xl">Type</Text>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
