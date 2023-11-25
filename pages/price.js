import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Card } from "@mantine/core";
import styles from "./price.module.scss";

export default function MainCode() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <main>
      <section className={styles.price}>
        <div className={styles.priceContainer}>
          <Card className={styles.priceCard} withBorder my="xs">
            <h3>Basic</h3>
            <h2>Free</h2>
            <p>1 euro par autocollant</p>
            <p>Jusqu'a 3 codes </p>
            <p> Notifications sur l'application et par email </p>
            <Button variant="outline" disabled>
              S'inscrire
            </Button>
          </Card>
          <Card className={styles.priceCard} withBorder my="xs">
            <h3>Pro</h3>
            <h2>3€/mois</h2>
            <p>10 autocollant gratuits puis 0.20 centimes par autocollant </p>
            <p>Jusqu'a 100 codes</p>
            <p>Notifications sur l'applictaion , Message et par email </p>
            <Button variant="outline">S'inscrire</Button>
          </Card>
        </div>
      </section>
    </main>
  );
}
