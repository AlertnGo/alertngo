import { UnstyledButton, Group, Avatar, Text, rem } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import styles from "./mainStyle.module.scss";

export default function LikedUser(props) {
  return (
    <Group className={styles.LikedUser}>
      <Avatar src={props.src} radius="md" size="lg" />

      <div>
        <Text size="md" fw={500}>
          {props.name}
        </Text>

        <Text c="dimmed" size="md">
          @ {props.pesudo}
        </Text>
      </div>
    </Group>
  );
}
