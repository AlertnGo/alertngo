import styles from "./editqr.module.scss";
import { Button, Text } from "@mantine/core";
import { useRouter } from "next/router";
import QRCODE from "./qrcode.svg";
import Image from "next/image";

export default function EditQr() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main>
      <section className={styles.editqr}>
        <div className={styles.qrcode}>
          <Image src={QRCODE} alt="QR Code" width={250} height={250} />
          <Text size="xl" c="dimmed">
            #{id}
          </Text>

          <div className={styles.bottomBar}>
            <Text size="md" c="dimmed">
              Alertngo
            </Text>
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
          </div>
        </div>
        <div className={styles.data}>
          <p>Nom : Velo</p>
          <p>Date de création : 12/12/2021</p>
          <p>Statut : Actif</p>
          <p>Nombre de scan : 12</p>
          <Button variant="light" color="blue" size="sm">
            Imprimer le QR code
          </Button>
          <Button variant="light" color="blue" size="sm">
            Modifier les informations
          </Button>
        </div>
      </section>
    </main>
  );
}
