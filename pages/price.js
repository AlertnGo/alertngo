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
            <p>1€ par autocollant</p>
            <p>Jusqu'à 3 QR codes</p>
            <p> Notifications sur l'application et par email </p>
            <Button variant="outline" disabled>
              Je m'engage
            </Button>
          </Card>
          <Card className={styles.priceCard} withBorder my="xs">
            <h3>Pro</h3>
            <h2>3€/mois</h2>
            <p>10 autocollant gratuits puis 0.20€ par autocollant </p>
            <p>Jusqu'à 100 QR codes</p>
            <p>Notifications sur l'applictaion , par message et par email </p>
            <Button variant="outline">Je m'engage</Button>
          </Card>
        </div>
      </section>
    </main>
  );
}
