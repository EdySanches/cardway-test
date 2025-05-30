'use client';

import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import styles from './profile.module.css';
import { useFetch } from '@/hooks/useFetch';

interface DogApiResponse {
  message: string;
  status: string;
}

export default function ProfilePage() {
  const { isAuthenticated, user, logout } = useAuth();
  const router = useRouter();
  const { data: dogData, loading, error } = useFetch<DogApiResponse>('https://dog.ceo/api/breeds/image/random');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const handleGoHome = () => {
    router.push('/');
  };

  if (!isAuthenticated || !user) {
    return null; // Prevent flash of content while redirecting
  }

  // Format date to Brazilian format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  // Get first letter of the name for avatar
  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileBox}>
        <h1>Profile</h1>
        <div className={styles.userInfo}>
          <div className={styles.avatarContainer}>
            {loading ? (
              <div className={styles.avatar}>...</div>
            ) : error ? (
              <div className={styles.avatar}>{getInitial(user.name)}</div>
            ) : dogData?.message ? (
              <img src={dogData.message} alt="Dog Avatar" className={styles.avatarImage} />
            ) : (
              <div className={styles.avatar}>{getInitial(user.name)}</div>
            )}
          </div>
          <div className={styles.details}>
            <div className={styles.field}>
              <label>Name</label>
              <p>{user.name}</p>
            </div>
            <div className={styles.field}>
              <label>Email</label>
              <p>{user.email}</p>
            </div>
            <div className={styles.field}>
              <label>CPF</label>
              <p>{user.cpf}</p>
            </div>
            <div className={styles.field}>
              <label>Birth Date</label>
              <p>{formatDate(user.birthDate)}</p>
            </div>
            <div className={styles.field}>
              <label>Status</label>
              <p className={styles.status}>Active</p>
            </div>
          </div>
        </div>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
        <button onClick={handleGoHome} className={styles.homeButton}>
          Voltar para Home
        </button>
      </div>
    </div>
  );
} 