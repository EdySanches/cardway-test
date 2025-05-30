'use client';

import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to React Challenges</h1>
        
        <div className={styles.userSection}>
          {isAuthenticated && user ? (
            <>
              <div className={styles.welcome}>
                Welcome back, {user.name}!
              </div>
              <Link href="/profile" className={styles.profileLink}>
                View Profile
              </Link>
            </>
          ) : (
            <Link href="/login" className={styles.loginLink}>
              Login
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
