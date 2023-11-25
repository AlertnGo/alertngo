import { Card, Text, Button, Group } from "@mantine/core";
import { IconShare } from "@tabler/icons-react";
import styles from "./mainStyle.module.scss";

export default function Code(props) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className={styles.code}
    >
      <Card.Section>
        <img
          src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC"
          className={styles.image}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="xs">
        <Text fw={500}>{props.name}</Text>
        <Text size="sm" c="dimmed">
          #{props.id}
        </Text>
      </Group>

      <Group mt="xs">
        <Button variant="light" color="blue" radius="xs">
          Modifier
        </Button>
        <Button variant="light" color="cyan" radius="md">
          <IconShare size="0.8rem" stroke={1.5} mr="2" />
        </Button>
      </Group>
    </Card>
  );
}
