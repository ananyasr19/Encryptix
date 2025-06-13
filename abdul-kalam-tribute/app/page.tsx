import Image from "next/image"

export default function TributePage() {
  return (
    <div className="min-h-screen bg-slate-50">
{/* Hero Section */}
<section className="flex flex-col items-center justify-center py-16 px-4 md:py-24 bg-gradient-to-b from-slate-100 to-slate-50">
  <h1 className="text-3xl md:text-5xl font-bold text-slate-800 text-center mb-3">
    A Tribute to Dr. A.P.J. Abdul Kalam
  </h1>
  <h2 className="text-xl md:text-2xl text-slate-600 mb-10 text-center">Missile Man of India</h2>
  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg mb-8">
    <Image
      src="/apj1.jpg"
      alt="Dr. A.P.J. Abdul Kalam"
      fill
      className="object-cover"
      priority
    />
  </div>
  <p className="text-slate-600 text-center max-w-2xl">1931 - 2015</p>
</section>

      {/* Biography Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
          The Life of an Extraordinary Visionary
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-700">Early Life & Education</h3>
            <p className="text-slate-600">
              Born on October 15, 1931, in Rameswaram, Tamil Nadu, Avul Pakir Jainulabdeen Abdul Kalam came from a
              humble background. Despite financial constraints, he pursued his education with determination, eventually
              graduating in physics and studying aerospace engineering.
            </p>
            <p className="text-slate-600">
              His early fascination with flight and science would shape his remarkable journey from a newspaper delivery
              boy to becoming one of India's most respected scientists and leaders.
            </p>
          </div>
          <div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-md">
            <Image
  src="/apj2.jpg"
  alt="Abdul Kalam Early Days"
  fill
  className="object-cover"
/>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 md:flex-row-reverse">
          <div className="space-y-4 md:order-2">
            <h3 className="text-xl font-semibold text-slate-700">Scientific Career</h3>
            <p className="text-slate-600">
              Dr. Kalam joined the Defence Research and Development Organisation (DRDO) in 1958 and later the Indian
              Space Research Organisation (ISRO). He was the project director of India's first indigenous Satellite
              Launch Vehicle (SLV-III) which successfully deployed the Rohini satellite.
            </p>
            <p className="text-slate-600">
              His work on developing ballistic missiles earned him the nickname "Missile Man of India." He played a
              crucial role in India's civilian space program and military missile development, including the Agni and
              Prithvi missiles.
            </p>
          </div>
          <div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-md md:order-1">
            <Image
  src="/apj3.jpg"
  alt="Dr. Kalam as a scientist"
  fill
  className="object-cover"
/>

          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-700">Presidency & Beyond</h3>
            <p className="text-slate-600">
              Dr. Kalam served as the 11th President of India from 2002 to 2007. Known as the "People's President," he
              was loved for his simplicity, wisdom, and dedication to inspiring the youth of India.
            </p>
            <p className="text-slate-600">
              After his presidency, he continued to engage with students and young people across the country, sharing
              his vision for a developed India. He passed away on July 27, 2015, while doing what he loved
              most—addressing students at the Indian Institute of Management in Shillong.
            </p>
          </div>
          <div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-md">
            <Image
  src="/apj4.jpg"
  alt="Dr. Kalam as President"
  fill
  className="object-cover"
/>
          </div>
        </div>
      </section>

      {/* Qualities Section */}
      <section className="bg-slate-100 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">Admirable Qualities</h2>
          <ul className="space-y-4 max-w-2xl mx-auto">
            <li className="flex items-start">
              <div className="bg-slate-200 rounded-full p-1 mr-3 mt-1">
                <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700">Humility</h3>
                <p className="text-slate-600">
                  Despite his achievements, Dr. Kalam maintained a simple lifestyle and remained humble throughout his
                  life.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-slate-200 rounded-full p-1 mr-3 mt-1">
                <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700">Visionary Leadership</h3>
                <p className="text-slate-600">
                  He had a clear vision for India's future and inspired millions to dream big and work towards those
                  dreams.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-slate-200 rounded-full p-1 mr-3 mt-1">
                <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700">Dedication to Education</h3>
                <p className="text-slate-600">
                  He believed in the power of education and dedicated his life to inspiring students across the country.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-slate-200 rounded-full p-1 mr-3 mt-1">
                <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700">Perseverance</h3>
                <p className="text-slate-600">
                  He overcame numerous obstacles in his life through hard work and determination.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-slate-200 rounded-full p-1 mr-3 mt-1">
                <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700">Integrity</h3>
                <p className="text-slate-600">
                  He maintained the highest ethical standards in his personal and professional life.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Quote Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-20">
        <blockquote className="relative">
          <div className="text-slate-300 text-6xl font-serif absolute top-0 left-0">"</div>
          <p className="text-xl md:text-2xl text-slate-700 italic text-center px-10 md:px-16">
            Dream is not that which you see while sleeping, it is something that does not let you sleep.
          </p>
          <div className="text-slate-300 text-6xl font-serif absolute bottom-0 right-0">"</div>
          <footer className="text-center mt-6 text-slate-600">— Dr. A.P.J. Abdul Kalam</footer>
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="bg-slate-200 py-8 px-4 text-center text-slate-600">
        <p>A tribute to the Missile Man of India and one of the greatest visionaries of our time.</p>
        <p className="mt-2 text-sm">© {new Date().getFullYear()} | In memory of Dr. A.P.J. Abdul Kalam</p>
      </footer>
    </div>
  )
}
