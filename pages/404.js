import { Title, Text, Button, Container, Group, Space } from "@mantine/core";
import Link from "next/link";

export default function NotFoundTitle() {
  return (
    <Container>
      <Space h={50} />

      <Text ta="center" size="100px" c="blue">
        404
      </Text>
      <Space h={20} />

      <Text size="40px" ta="center">
        Vous avez trouvé un endroit secret.
      </Text>
      <Text c="dimmed" size="lg" ta="center">
        Malheureusement, il ne s'agit que d'une page 404. Vous avez peut-être
        mal saisi l'adresse ou la page a été déplacée vers une autre URL.
      </Text>
      <Space h={20} />
      <Group justify="center">
        <Link href="/">
          <Button variant="subtle" size="md">
            Me ramener à la page d'accueil
          </Button>
        </Link>
      </Group>
    </Container>
  );
}
