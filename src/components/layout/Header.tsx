export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <h1 className="text-2xl font-bold">DevCalc</h1>

        <nav>
          <ul className="flex items-center gap-6">
            <li>Home</li>
            <li>Calculators</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}