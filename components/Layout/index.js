import Head from 'next/head';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <main className={styles.mainContainer}>
      <Head>
        <title>Worer - Portfolio</title>
      </Head>
      {children}
    </main>
  );
};

export default Layout;
