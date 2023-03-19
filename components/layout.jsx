export default function Layout({children}) {
  return (
      <div>
        <header>
          blah header
        </header>
        <main>
          {children}
        </main>
        <footer>
          Built with Next.js, Tailwind CSS
        </footer>
      </div>
  );
}