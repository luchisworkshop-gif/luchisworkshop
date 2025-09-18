export default function Footer() {
  return (
    <footer className="border-t py-6 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Lulusworkshop</p>
      <div className="mt-2 space-x-4">
        <a href="#">Aviso legal</a>
        <a href="#">Privacidad</a>
        <a href="#">Cookies</a>
      </div>
    </footer>
  );
}
