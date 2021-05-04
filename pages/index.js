import Link from "next/link";
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ninja List</title>
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="ninjas" />
      </Head>

      <h1 className={styles.title}>Home</h1>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
        ratione. Omnis nobis quaerat minima non in, amet error odit voluptatibus
        itaque, illum eveniet voluptate dolorem, a rem quidem sint iusto nemo
        iste ipsum ullam cum? Molestiae eveniet recusandae nemo tenetur?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
        ratione. Omnis nobis quaerat minima non in, amet error odit voluptatibus
        itaque, illum eveniet voluptate dolorem, a rem quidem sint iusto nemo
        iste ipsum ullam cum? Molestiae eveniet recusandae nemo tenetur?
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </>
  );
}
