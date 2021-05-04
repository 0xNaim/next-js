import Head from "next/head";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Ninja List</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="ninjas" />
      </Head>

      <div>
        <h1 className={styles.title}>About</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
          ratione. Omnis nobis quaerat minima non in, amet error odit
          voluptatibus itaque, illum eveniet voluptate dolorem, a rem quidem
          sint iusto nemo iste ipsum ullam cum? Molestiae eveniet recusandae
          nemo tenetur?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
          ratione. Omnis nobis quaerat minima non in, amet error odit
          voluptatibus itaque, illum eveniet voluptate dolorem, a rem quidem
          sint iusto nemo iste ipsum ullam cum? Molestiae eveniet recusandae
          nemo tenetur?
        </p>
      </div>
    </>
  );
};

export default About;
