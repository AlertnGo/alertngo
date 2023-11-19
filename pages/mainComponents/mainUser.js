import { Avatar, Text, Group, Button } from "@mantine/core";
import {
  IconAlertCircle,
  IconAt,
  IconEyeEdit,
  IconNotification,
  IconSettings,
  IconUserEdit,
} from "@tabler/icons-react";
import Link from "next/link";
import styles from "./mainStyle.module.scss";

export default function MainUser() {
  return (
    <div>
      <Group wrap="nowrap">
        <Avatar
          src="https://media.licdn.com/dms/image/D4E03AQHeZgEkLr9U8g/profile-displayphoto-shrink_400_400/0/1664101581696?e=1701907200&v=beta&t=cm19sx8iOnLHxeZ8g1Vssb-rEcf0h_mVTeByDi1aTM4"
          size={100}
          radius="7px"
        />
        <div>
          <Text size="lg" fw={500} tt="capitalize">
            vishnugopy10
          </Text>

          <Group wrap="nowrap" gap={1}>
            <IconAt stroke={1.5} size="1rem" />
            <Text size="md" c="grey" tt="lowercase">
              vishnugopy
            </Text>
          </Group>
          <Text size="sm" c="dimmed">
            Depuis octobre 2021
          </Text>
          <Button variant="light" leftSection={<IconUserEdit size={14} />}>
            Modifier
          </Button>
        </div>
      </Group>
      <nav className={styles.userNavs}>
        <Link href="setting">
          <Group gap={5} mt={5}>
            <IconSettings stroke={1.2} />
            <Text size="sm">Parametre</Text>
          </Group>
        </Link>
        <Link href="setting">
          <Group gap={5} mt={5}>
            <IconEyeEdit stroke={1.2} />
            <Text size="sm">Modifier le mot de pass</Text>
          </Group>
        </Link>
        <Link href="setting">
          <Group gap={5} mt={5}>
            <IconAlertCircle stroke={1.2} />
            <Text size="sm">Notifications</Text>
          </Group>
        </Link>
      </nav>
    </div>
  );
}
