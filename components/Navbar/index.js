import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import styles from './Navbar.module.css';

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      {openMenu ? (
        <div>
          <div className={styles.navbar}>
            <Image src="/w-logo.png" alt="logo" width="32" height="32" />
            <button type="button" className={styles.menuIcon}>
              <FaWindowClose
                onClick={() => setOpenMenu(!openMenu)}
                size="24px"
              />
            </button>
          </div>
          <ul className={styles.navbarList}>
            <Link href="/">
              <li className={styles.navbarItem}>Works</li>
            </Link>
            <Link href="/">
              <li className={styles.navbarItem}>Resume</li>
            </Link>
            <Link href="/">
              <li className={styles.navbarItem}>Contact</li>
            </Link>
          </ul>
        </div>
      ) : (
        <div className={styles.navbar}>
          <Image src="/w-logo.png" alt="logo" width="32" height="32" />
          <button type="button" className={styles.menuIcon}>
            <FaBars
              onClick={() => setOpenMenu(!openMenu)}
              size="24px"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
