import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  img: string;
  description?: string;
  credentialUrl?: string;
}

export default function Certifications() {
  const certifications: CertificateItem[] = [
    {
      title: 'The Complete 2024 Web Development Bootcamp ',
      issuer: 'Udemy',
      date: 'Earned 2026',
      img: '/images/App Brewery.jpg',
      description: 'Verified certification demonstrating professional-grade programming, architectural coding competencies, and web development fundamentals.',
      credentialUrl: 'https://www.udemy.com/certificate/UC-f94a58a3-4716-4ee5-affd-4fcecbc28526/'
    },
    {
      title: 'Practical Software Development',
      issuer: 'TestDome',
      date: 'Earned 2026',
      img: '/images/testdome.webp',
      description: 'Verified certification demonstrating professional-grade programming, architectural coding competencies, and web development fundamentals.',
      credentialUrl: 'https://www.testdome.com/certificates/73dac721a5f244da8bf38543aa11915d'
    }
  ];

  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <div className='w-full sm:w-auto md:w-185 min-h-screen flex flex-col items-center mx-auto px-10 pt-20 pb-20 relative z-10 animate-fade-in font-saira'>
      {/* Dynamic SEO tags */}
      <title>Certifications & Credentials - Portfolio</title>
      <meta name="description" content="Professional certifications, programming achievements, and verified credentials in software engineering." />

      <div className="flex w-full py-10 flex-col">
        {/* Header */}
        <div className="flex justify-between w-full items-center h-10 pb-10 border-b border-gray-600/70">
          <h1 className="font-bitcount text-3xl text-gray-100">Certifications</h1>
          <Link to="/" className="text-gray-400 hover:text-white transition duration-300 text-sm font-semibold">
            ← BACK HOME
          </Link>
        </div>

        {/* Certificates Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {certifications.map((cert, index) => {
            const [imgError, setImgError] = useState(false);
            return (
              <div
                key={index}
                className="group border border-neutral-700/50 rounded-3xl bg-neutral-800/30 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-white/50 hover:scale-102 cursor-pointer shadow-md"
                onClick={() => setSelectedCert(cert)}
              >
                <div>
                  {/* Badge Image Frame */}
                  <div className="w-full h-44 bg-neutral-900 flex items-center justify-center border-b border-neutral-700/40 p-4 shrink-0 overflow-hidden">
                    {imgError ? (
                      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-neutral-850 to-neutral-900 border border-neutral-800 flex flex-col items-center justify-center p-4">
                        <span className="font-bitcount text-neutral-500 text-2xl font-bold">📜</span>
                        <span className="text-xs font-semibold text-gray-400 mt-2 text-center">{cert.title}</span>
                      </div>
                    ) : (
                      <img
                        src={cert.img}
                        alt={`${cert.title} badge`}
                        className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                        onError={() => setImgError(true)}
                      />
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                      {cert.issuer}
                    </span>
                    <h2 className="text-lg font-bold text-gray-100 mt-1 mb-2 group-hover:text-white transition-colors duration-300">
                      {cert.title}
                    </h2>
                    {cert.description && (
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {cert.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer Metadata */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs text-gray-500">
                  <span>{cert.date}</span>
                  <span className="text-white font-semibold text-xs group-hover:translate-x-1 transition-transform">
                    View Credentials →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal View */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-sm z-500 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="w-full max-w-xl bg-neutral-900 border border-neutral-700/60 rounded-3xl overflow-hidden shadow-2xl relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute right-4 top-4 w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex items-center justify-center text-gray-300 hover:text-white cursor-pointer transition text-lg z-10"
              onClick={() => setSelectedCert(null)}
            >
              ⨉
            </button>

            {/* Banner/Image */}
            <div className="w-full bg-neutral-950 p-10 flex items-center justify-center border-b border-neutral-700/40">
              <img
                src={selectedCert.img}
                alt={`${selectedCert.title} enlarged`}
                className="max-h-60 sm:max-h-72 object-contain rounded"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '';
                }}
              />
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-baseline gap-2 mb-2">
                <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  {selectedCert.issuer}
                </span>
                <span className="text-xs text-gray-500 bg-neutral-800 px-2 py-0.5 rounded border border-neutral-700/50">
                  {selectedCert.date}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-3">
                {selectedCert.title}
              </h2>
              {selectedCert.description && (
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {selectedCert.description}
                </p>
              )}
              {selectedCert.credentialUrl && (
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center w-full px-5 py-2.5 bg-white hover:bg-neutral-200 text-black rounded-xl transition duration-300 font-semibold text-sm cursor-pointer"
                >
                  {"Verify Certificate Credential ↗\uFE0E"}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
