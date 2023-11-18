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

export default function Signin() {
  return (
    <Container size={450} my={40}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@gmail.com" required />
        <TextInput label="Nom" placeholder="Leo" required />
        <TextInput label="Pré-nom" placeholder="Dass" required />
        <PasswordInput
          label="Mot de passe"
          placeholder="Votre mot de passe"
          required
          mt="md"
        />
        <PasswordInput
          label=" Répeter le Mot de passe"
          placeholder="Votre mot de passe"
          required
          mt="md"
        />

        <Button fullWidth mt="xl">
          S'inscrire
        </Button>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Vous avez déja de compte ?
          <Link href="/login">
            <Anchor size="sm" component="button">
              Connecter vous
            </Anchor>
          </Link>
        </Text>
      </Paper>
    </Container>
  );
}
