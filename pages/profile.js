import { Avatar, Badge, Group, Space, Text } from "@mantine/core";
import { IconHeart } from "@tabler/icons-react";
import styles from "./profile.module.scss";

export default function Profile() {
  return (
    <main>
      <section>
        <Avatar
          size="xl"
          radius="sm"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
        />
        <Group mt={5} spacing="xs">
          <Text size="xl" fw={500} tt="capitalize">
            vishnugopy10
          </Text>
          <IconHeart size={20} fill="red" />
        </Group>
        <Badge color="blue" mx={10}>
          Pro
        </Badge>
        <Badge color="indigo">100 points</Badge>
        <Space h={50} />

        <div>
          <Text size="lg" c="dimmed" mb={10}>
            Contacts
          </Text>
          <ul className={styles.contact}>
            <li>Notifier avec alertngo</li>
            <li>Appeler</li>
            <li>Envoyer un message</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
