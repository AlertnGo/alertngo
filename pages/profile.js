import { Avatar, Badge, Button, Group, Space, Text } from "@mantine/core";
import {
  IconHeart,
  IconCalculator,
  IconMessage2Plus,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBellPlus,
  IconPhonePlus,
  IconCirclePlus,
} from "@tabler/icons-react";
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
          <Button variant="white" color="blue" m={0} p={0}>
            <IconCirclePlus size={25} />
          </Button>
        </Group>
        <Badge color="blue" mr={10}>
          Pro
        </Badge>
        <Badge color="indigo">100 points</Badge>
        <Space h={50} />

        <div>
          <Text size="lg" c="dimmed" mb={10}>
            Contacts
          </Text>
          <ul className={styles.contact}>
            <li>
              <IconBellPlus size={20} />
              <p>Notifier avec alertngo</p>
            </li>
            <li>
              <IconPhonePlus size={20} />
              <p>Appeler</p>
            </li>
            <li>
              <IconMessage2Plus size={20} />
              <p>Envoyer un message</p>
            </li>
            <li>
              <IconBrandInstagram size={20} />
              <p>Instagram</p>
            </li>
            <li>
              <IconBrandFacebook size={20} />
              <p>Facebook</p>
            </li>
            <li>
              <IconBrandTwitter size={20} />
              <p>X / Twitter</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
