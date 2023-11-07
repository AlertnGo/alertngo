import styles from "./app.module.scss";

export default function Main() {
  return (
    <main className={styles.app}>
      <section>
        <div>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </nav>
        </div>

        <div>content</div>
      </section>
    </main>
  );
}
