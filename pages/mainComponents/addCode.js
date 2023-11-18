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
      <Input.Wrapper size="md" label="  Nom du QR code">
        <Input placeholder="BMW M3" />
      </Input.Wrapper>
      <Space h="md" />

      <Input.Wrapper size="md" label="Type du Placement">
        <SimpleGrid cols={3} mt="md">
          {items}
        </SimpleGrid>
      </Input.Wrapper>
      <Space h="md" />

      <Input.Wrapper size="md" label="Status">
        <SegmentedControl fullWidth size="md" data={["En pause", "Active"]} />
      </Input.Wrapper>
      <Button color="blue" my="md" fullWidth>
        Ajouter
      </Button>
    </Card>
  );
}
