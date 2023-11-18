import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <Container size={450} my={30}>
      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <Text ta="center">Vous avez oublié votre mot de passe ?</Text>
        <Text c="dimmed" fz="sm" ta="center">
          Saisissez votre email pour obtenir un lien de réinitialisation
        </Text>
        <TextInput
          label="Votre adresse e-mail"
          placeholder="alertngo@gmail.com"
          required
        />
        <Group justify="space-between" mt="lg">
          <Link href="/login">
            <Anchor c="dimmed" size="sm">
              <Center inline>
                <IconArrowLeft
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
                <Box ml={5}>Retour</Box>
              </Center>
            </Anchor>
          </Link>
          <Button>Reset password</Button>
        </Group>
      </Paper>
    </Container>
  );
}
