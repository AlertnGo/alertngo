import styles from "./mainStyle.module.scss";
import Code from "./code";

export default function MainCode() {
  return (
    <div className={styles.mainQRcodeContainer}>
      <Code name="Mon Velo" id="0001" />
      <Code name="Ma voiture" id="2356" />
      <Code name="BMW" id="6545" />
      <Code name="Chat" id="5445" />
      <Code name="Meow" id="9856" />
      <Code name="Ma voiture 2" id="1000" />
    </div>
  );
}
