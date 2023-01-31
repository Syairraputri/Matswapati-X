import FooterRelatedLinks from './FooterRelatedLinks';

export default function MatswapatiXPageFooter() {
  return (
    <footer className="bg-sky-100 pt-16 pb-8">
      <div className="container mx-auto px-8">
        <div className="mx-auto max-w-6xl">
          {/* Footer Contact and Address Section */}
          <div className="mb-20 md:flex md:items-start md:justify-between">
            <section className="mb-10 md:mb-0 md:flex-1">
              <h3 className="mb-4 text-xl text-justify font-bold">Kontak</h3>
              <address className="not-italic">
                <p>Badan Riset dan Inovasi Nasional</p>
                <p className="mb-2">Jl. Sangkuriang, Dago, Kecamatan Coblong,
                Bandung, Jawa Barat 40135</p>

                <p>
                <strong>Telepon :{' '}</strong>
                  <a
                    className="underline transition duration-300 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-sky-100"
                  >
                    (022)1234567
                  </a>{' '}
                  </p>
                <p>
                  <strong>Fax.</strong> 1234567
                </p>

                <p>
                <strong>Email : </strong>
                  <a
                    href="mailto:humas@lapan.go.id"
                    className="underline transition duration-300 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-sky-100"
                  >
                     prima@brin.go.id
                  </a>
                </p>
              </address>
            </section>

            {/* Footer Other Links */}
            <section className="mb-10 md:mb-0 md:flex-1">
              <h3 className="mb-4 text-xl font-bold">Tautan Terkait</h3>
              <ul className="grid grid-cols-2 gap-y-2">
                <FooterRelatedLinks />
              </ul>
            </section>

            {/* Footer BRIN Profile */}
            <section className="text-justify mb-10 md:mb-0 md:flex-1">
              <h3 className="mb-4 text-xl font-bold">Profil BRIN</h3>
              <p>
              BRIN adalah lembaga pemerintah yang berada di bawah dan bertanggung jawab kepada Presiden.
              BRIN mempunyai tugas menyelenggarakan tugas pemerintahan di bidang penelitian, pengembangan,  
              pengkajian dan penerapan, invensi dan inovasi, penyelenggaraan ketenaganukliran, dan 
              penyelenggaraan keantariksaan secara nasional yang terintegrasi.
              </p>
            </section>
          </div>

          <p className="text-center font-bold">
            &copy;BRIN. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}