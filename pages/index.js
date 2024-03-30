import Features from "./components/Features/features";
import { sql } from "@vercel/postgres";

export default async function Home({ params }) {
  const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;
  return (
    <main>
      <div>
        {rows.map((row) => (
          <div key={row.id}>
            {row.id} - {row.quantity}
          </div>
        ))}
      </div>
      <Features />
    </main>
  );
}
