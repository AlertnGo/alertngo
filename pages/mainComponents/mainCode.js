import Code from "./code";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import styles from "./mainStyle.module.scss";
import AddCode from "./addCode";

export default function MainCode() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <div className={styles.actionBar}>
        <Modal
          opened={opened}
          onClose={close}
          title=" Créer un code QR"
          centered
        >
          <AddCode />
        </Modal>
        <Button variant="outline" onClick={open}>
          Ajouter un code
        </Button>
      </div>
      <div className={styles.mainQRcodeContainer}>
        <Code name="Mon Velo" id="0001" />
        <Code name="Ma voiture" id="2356" />
        <Code name="BMW" id="6545" />
        <Code name="Chat" id="5445" />
        <Code name="Meow" id="9856" />
        <Code name="Meow" id="9856" />
        <Code name="Meow" id="9856" />
        <Code name="Meow" id="9856" />
        <Code name="Meow" id="9856" />
        <Code name="Meow" id="9856" />
        <Code name="Meow" id="9856" />
        <Code name="Meow" id="9856" />
        <Code name="Meow" id="9856" />
        <Code name="Ma voiture 2" id="1000" />
      </div>
    </>
  );
}
