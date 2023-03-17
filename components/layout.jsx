import styles from './layout.module.css';

export default function Layout({children}) {
  return (
      <div>
        <header className={styles.header}>
          blah header
        </header>
        <main>
          {children}
        </main>
        <footer className={styles.footer}>
          Built with Next.js, Tailwind CSS
        </footer>
      </div>
  );
}