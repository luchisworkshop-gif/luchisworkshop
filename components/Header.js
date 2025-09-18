import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 border-b">
      {/* Logo con enlace a la home */}
      <Link href="/">
        <Image
          src="/images/logo.jpg"
          alt="Lulusworkshop"
          width={120}
          height={60}
          className="cursor-pointer"
        />
      </Link>

      {/* Menú de navegación */}
      <nav className="space-x-6 text-gray-700 font-medium">
        <Link href="/">Inicio</Link>
        <Link href="/catalogo">Catálogo</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}
