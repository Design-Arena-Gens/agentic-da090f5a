export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
      <div className="mx-auto w-full max-w-4xl px-6">
        <p>
          ? {new Date().getFullYear()} General Relativity ? Philosophy. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
