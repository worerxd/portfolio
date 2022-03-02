/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Layout from '../components/Layout';
import NavBar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Layout>
        <div className={styles.imageContainer}>
          <Image src="/profile.jpg" width="250px" height="250px" />
        </div>
        <div className={styles.title}>
          <h1>
            Hi, I'm Walther and I'm a
            <br />
            {' '}
            <span className={styles.titleSpan}>Junior Full Stack Developer</span>
          </h1>
        </div>
        <div className={styles.description}>
          I'm Junior Full Stack Developer
          based in Lima-Peru. I have 1 year of developer
          experience and I specialize in creating
          web apps. I am open for new opportunities and interesting projects.
        </div>
      </Layout>
    </div>

  );
}
