export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400 flex flex-wrap items-center gap-3">
        <span>© {new Date().getFullYear()} Rina Osman</span>
        <span className="opacity-50">·</span>
        <span>rinaxosman@gmail.com</span>
        <span className="opacity-50">·</span>
        <span className="flex items-center gap-1">
          <a href="#home" className="hover:opacity-80">
            Back to top
          </a>
        </span>
      </div>
    </footer>
  );
}
