import {
  Badge,
  Input,
  Button,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
  Center,
} from "@mantine/core";
import {
  IconAt,
  IconTimeDuration30,
  IconCat,
  IconAccessPoint,
} from "@tabler/icons-react";
import styles from "./featuresCards.module.scss";

const mockdata = [
  {
    title: "Plus besoin d'attendre les autres",
    description:
      "Si vous êtes pressé et s'ils vous bloquent , vous avez de la chance s'ils utilisent Alerngo, alertez-les immédiatement et allez là où vous devez aller rapidement.",
    icon: IconTimeDuration30,
  },
  {
    title: "Soyez gentil comme vous l'êtes",
    description:
      "Si vous avez trouvé un animal perdu, vous pouvez l'alerter en utilisant Alertngo, il sera très utile pour les propriétaires d'animaux de compagnie.",
    icon: IconCat,
  },
  {
    title: "Utile pour l'autre  personnes ",
    description:
      "Si vous avez besoin de contacter le propriétaire de la voiture, utilisez alertngo. ",
    icon: IconAccessPoint,
  },
];

export default function Features() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={styles.card}
      padding="xl"
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={styles.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container className={styles.container} size="lg" py="xl">
      <Title order={1} className={styles.title} ta="center" mt="sm" mx="sm">
        Alertngo
        <Badge color="blue" variant="light">
          0.0.1
        </Badge>
      </Title>

      <Text
        c="dimmed"
        className={styles.description}
        ta="center"
        mt="md"
        mb="xl"
      >
        Alertngo est une application web qui permet aux utilisateurs de
        communiquer avec d'autres personnes à l'aide d'un code Qr.
      </Text>

      <Text align="center" mb={20}>
        Rejoignez la liste d'attente
      </Text>
      <Center>
        <Group align="center">
          <Input
            leftSection={<IconAt size={16} />}
            variant="filled"
            placeholder="Votre email Ici"
            size="sm"
          />
          <Button size="sm">M'ajouter</Button>
        </Group>
      </Center>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
