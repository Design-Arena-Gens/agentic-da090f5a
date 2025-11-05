import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/principles', label: 'Principles' },
  { href: '/spacetime', label: 'Spacetime' },
  { href: '/measurement', label: 'Measurement' },
  { href: '/causality', label: 'Causality' },
  { href: '/epistemology', label: 'Epistemology' }
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold">
          GR Philosophy
        </Link>
        <nav className="hidden gap-5 text-sm font-medium sm:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
