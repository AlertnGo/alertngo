import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";

import Link from "next/link";

export default function Login() {
  return (
    <Container size={450} my={40}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput
          label="Mot de passe"
          placeholder="Votre mot de passe"
          required
          mt="md"
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Se souvenir de moi" />
          <Anchor component="button" size="sm">
            Mot de passe oublié ?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Se connecter
        </Button>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Vous n'avez pas encore de compte ?
          <Link href="/signin">
            <Anchor size="sm" component="button">
              Créer un compte{" "}
            </Anchor>
          </Link>
        </Text>
      </Paper>
    </Container>
  );
}
