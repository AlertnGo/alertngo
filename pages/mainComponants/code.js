import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { IconShare } from "@tabler/icons-react";

export default function Code(props) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC"
          height={200}
          width={170}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="xs">
        <Text fw={500}>{props.name}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        #{props.id}
      </Text>

      <Group mt="xs">
        <Button variant="light" color="blue" radius="md">
          Modifier
        </Button>
        <Button variant="light" color="cyan" radius="md">
          <IconShare size="1rem" stroke={1.5} />
        </Button>
      </Group>
    </Card>
  );
}
