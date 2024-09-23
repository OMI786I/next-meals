import Link from "next/link";
import classes from "../community/page.module.css";
import MealsGrid from "@/components/meals/MealsGrid";

export default function Home() {
  return (
    <div className="">
      <header className={classes.header}>
        <h1>
          Delicious meals, created
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun
        </p>

        <div className={classes.cta}>
          <Link href={`/meals/share`}>Share your meals</Link>
        </div>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </div>
  );
}
