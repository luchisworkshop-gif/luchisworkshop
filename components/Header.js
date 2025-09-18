import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <Link href="/">
        <Image src="/images/logo.JPG" alt="Lulusworkshop" width={120} height={60} />
      </Link>
      <nav className="space-x-4">
        <Link href="/">Inicio</Link>
        <Link href="/catalogo">Catálogo</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}
