import { Avatar, Group, Text } from "@mantine/core";
import { IconHeart } from "@tabler/icons-react";

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
        <Text size="sm" c="dimmed">
          Depuis octobre 2021
        </Text>

        <div>
          <h2>Contacts</h2>
          <ul>
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
