export default function MatswapatiXPageNavMenu() {
  return (
    <ul className="hidden md:flex md:items-center md:gap-4">
      <li>
        <a
          href="/pages/Beranda/"
          className="inline-block px-4 py-3 transition duration-300 hover:text-sky-400 focus:rounded-none focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Beranda
        </a>
      </li>

      <li>
        <a
          href="/pages/Informasi/"
          className="inline-block px-4 py-3 transition duration-300 hover:text-sky-400 focus:rounded-none focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Informasi
        </a>
      </li>

      <li>
        <a
          href="/pages/contact/"
          className="inline-block px-4 py-3 transition duration-300 hover:text-sky-400 focus:rounded-none focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Tentang Kami
        </a>
      </li>
    </ul>
  );
}