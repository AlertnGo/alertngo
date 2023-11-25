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
        <Text fw={400}>{props.name}</Text>
        <Text size="sm" c="dimmed">
          #{props.id}
        </Text>
      </Group>

      <Button variant="outline" color="blue" radius="md" mt={5}>
        Modifier
      </Button>
    </Card>
  );
}
