import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-bold">Lulusworkshop</h1>
      <nav className="space-x-4">
        <Link href="/">Inicio</Link>
        <Link href="/catalogo">Catálogo</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}
