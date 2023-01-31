import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

interface MatswapatiXPageNavMobileProps {
  navMenuBtnHandler: () => void;
  isOpen: boolean;
}

export default function MatswapatiXPageNavMobile({
  navMenuBtnHandler,
  isOpen,
}: MatswapatiXPageNavMobileProps) {
  const navMenuElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const navMenuElement = navMenuElementRef.current as HTMLDivElement;

    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      navMenuElement.classList.remove('hidden');
      setTimeout(() => {
        navMenuElement.classList.add('!scale-100', '!opacity-100');
      }, 100);
    } else {
      navMenuElement.classList.remove('!scale-100', '!opacity-100');
      setTimeout(() => {
        document.body.classList.remove('overflow-hidden');
        navMenuElement.classList.add('hidden');
      }, 300);
    }
  }, [isOpen]);

  return (
    <div
      ref={navMenuElementRef}
      className="fixed top-0 left-0 z-20 hidden h-screen w-full scale-95 bg-slate-100/50 opacity-0 backdrop-blur transition duration-300"
    >
      <div className="flex h-full w-full items-center justify-center">
        <ul className="text-center">
          <li className="mb-4">
            <a
              href="/pages/Beranda/"
              className="inline-block w-full rounded-md bg-slate-200 px-6 py-3 text-lg shadow shadow-slate-300"
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

          <li className="mb-4">
            <a
              href="/pages/contact/"
              className="inline-block w-full rounded-md bg-slate-200 px-6 py-3 text-lg shadow shadow-slate-300"
            >
              Tentang Kami
            </a>
          </li>

          <li>
            <button
              type="button"
              className="px-4 py-3 text-2xl text-red-500"
              onClick={navMenuBtnHandler}
            >
              <FontAwesomeIcon
                icon={faCircleXmark}
                role="presentation"
                aria-hidden="true"
              />

              <span className="absolute -left-[9999px]">
                Tutup navigasi menu
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
