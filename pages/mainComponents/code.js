import { Card, Text, Button, Group } from "@mantine/core";
import styles from "./mainStyle.module.scss";

export default function Code(props) {
  return (
    <Card
      shadow="xs"
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

      <Button size="md" variant="white" color="blue" mt={5}>
        Modifier
      </Button>
    </Card>
  );
}
