import { useParams } from "next/navigation";
import styles from "./editqr.module.scss";
import React, { useEffect, useRef } from "react";

export default function EditQr() {
  const id = useParams().id;

  return (
    <main>
      <section>
        <div className={styles.qrcode}>QR CODE {id} </div>
      </section>
    </main>
  );
}
