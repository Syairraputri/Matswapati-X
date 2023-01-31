import MainProdLists from './MainProdLists';

export default function MainSection() {
  return (
    <main className="bg-semar-logo-bg bg-cover_160% bg-center bg-no-repeat md:bg-cover_100% md:bg-center_t-300px&r-100px xl:bg-center_t-560px&r-100px">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="pt-10 pb-20 md:pt-16 lg:pt-20">
            <header className="mb-12 text-center md:text-left">
              <h1 className="mb-2 text-6xl font-bold text-sky-800 lg:text-6xl">
                Matswapati X.
              </h1>
              <p className="mb-6 font-bold lg:text-2xl">
                (Marine and Atmospheric Data Download and Processing Automation System-Extend)
              </p>
              <p className="mb-6 text-justify lg:mb-8 lg:max-w-5xl">
              MATSWAPATI atau Marine and Atmospheric Data Download and Processing Automation System
              merupakan suatu sistem otomatisasi berbasis bahasa pemrograman python untuk mengunduh dan 
              mengolah data atmosfer dan laut dari sumber terbuka. Aplikasi ini terdiri atas tiga fitur utama, yaitu 
              pengunduhan, pengecekan, dan pengolahan data. Pengguna cukup melakukan input jenis parameter,
              domain, dan rentang waktu data yang diinginkan. Dalam aplikasi ini, data-data atmosfer dan laut diakses
              dari Program Copernicus Uni Eropa (Copernicus Programme of the European Union). 
              </p>
            </header>

            <section>
              <h2 className="mb-6 text-center text-xl font-bold md:text-left">
                Informasi
              </h2>
            </section>

            <MainProdLists />
          </div>
        </div>
      </div>
    </main>
  );
}