import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <h1>Alertngo</h1>
        <p>
          Alertngo is a web application that allows users to communicate with
          other people with the help of our Qr code.
        </p>

        <form>
          <input type="text" placeholder="Enter your email" />
          <button>Join Waitlist</button>
          <Link href="/app">app</Link>
        </form>
      </section>
    </main>
  );
}
