import styles from "./editqr.module.scss";
import React, { useEffect, useRef } from "react";

export default function EditQr() {
  return (
    <main>
      <section>
        <div className={styles.qrcode}>QR CODE</div>
      </section>
    </main>
  );
}
