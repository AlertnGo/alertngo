import { Avatar, Text, Group, Button } from "@mantine/core";
import { IconAt, IconUserEdit } from "@tabler/icons-react";

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
          <Text fz="xl" fw={500} tt="capitalize">
            vishnugopy10
          </Text>

          <Group wrap="nowrap" gap={1}>
            <IconAt stroke={1.5} size="1rem" />
            <Text fz="lg" c="grey" tt="lowercase">
              vishnugopy
            </Text>
          </Group>
          <Text fz="sm" c="dimmed">
            Depuis octobre 2021
          </Text>
          <Button variant="light" leftSection={<IconUserEdit size={14} />}>
            Modifier
          </Button>
        </div>
      </Group>
    </div>
  );
}
