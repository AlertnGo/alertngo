import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Card } from "@mantine/core";
import styles from "./price.module.scss";
import { Icon123, IconCheck } from "@tabler/icons-react";

export default function MainCode() {
  const Data = [
    {
      title: "Basic",
      price: "Gratuit",
      option: [
        "2€ par autocollant",
        "Jusqu'à 3 QR codes",
        "Notifications sur l'application et par email",
      ],
      button: "Je m'engage",
      link: "#",
    },
    {
      title: "Pro",
      price: "3€/mois",
      option: [
        "10 autocollant gratuits puis 0.50€ par autocollant",
        "Jusqu'à 100 QR codes",
        "Notifications sur l'applictaion , par message et par email",
        "Communiquer sur l'application",
      ],
      button: "Je m'engage",
      link: "#",
    },
    {
      title: "One",
      price: "99€ une seul fois",
      option: [
        "50 autocollant gratuits puis 0.25€ par autocollant",
        "QR codes illimté",
        "Notifications sur l'applictaion , par message et par email",
        "Communiquer sur l'application",
        "5 ans de mise à jour",
      ],
      button: "Je m'engage",
      link: "#",
    },
  ];

  return (
    <main>
      <section className={styles.price}>
        <div className={styles.priceContainer}>
          {Data.map((data) => (
            <Card
              key={data.title}
              shadow="md"
              radius="lg"
              className={styles.card}
              padding="md"
            >
              <h3 className={styles.title}>{data.title}</h3>
              <h1 className={styles.price}>{data.price}</h1>
              <div className={styles.option}>
                {data.option.map((option) => (
                  <p className={styles.option}>
                    <IconCheck className={styles.iconOption} size={15} />
                    {option}
                  </p>
                ))}
              </div>
              <Button
                className={styles.button}
                variant="light"
                color="blue"
                radius="sm"
                size="md"
              >
                {data.button}
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
