import Link from "next/link";
import { DarkLightImageAutoscale } from "@/common/dark-light-image";
import { DarkLightImageFragment } from "@/lib/basehub/fragments";

export const Footer = ({ logo }: { logo: DarkLightImageFragment }) => {
  return (
    <footer className="border-t border-[--border] bg-[--surface-primary] dark:border-[--dark-border] dark:bg-[--dark-surface-primary]">
      <div className="container mx-auto px-6 py-16">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left Column - Company Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-4 transition-opacity hover:opacity-80"
              >
                <div className="h-12 w-12">
                  <DarkLightImageAutoscale {...logo} />
                </div>
                <span className="text-2xl font-bold text-[--text-primary] dark:text-[--dark-text-primary]">
                  Marketingexperten.de
                </span>
              </Link>
            </div>

            <div className="space-y-4 text-base text-[--text-secondary] dark:text-[--dark-text-secondary]">
              <p className="font-medium">Our location: Grassistr. 19, 04107 Leipzig</p>
              <p className="font-medium">Phone & WhatsApp: 0176 3449 2580</p>
              <p className="leading-relaxed">
                We bring you more customer inquiries, sales & applications by expanding your digital
                presence primarily on Meta & Google. Fast, data-based, profitable & scalable.
              </p>
              <Link
                href="/termin-buchen"
                className="inline-flex items-center gap-2 rounded-lg bg-[--accent-500] px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-[--accent-600] hover:shadow-lg dark:bg-[--dark-accent-500] dark:hover:bg-[--dark-accent-600]"
              >
                <span>→</span>
                <span>Kostenlos Erstgespräch buchen</span>
              </Link>
            </div>
          </div>

          {/* Middle Column - Useful Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[--text-primary] dark:text-[--dark-text-primary]">
              Useful links
            </h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link
                  href="/erstgespraech-buchen"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Erstgespräch buchen
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/fallstudien"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Fallstudien
                </Link>
              </li>
              <li>
                <Link
                  href="/ueber-uns"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/kundenbewertungen"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Kundenbewertungen
                </Link>
              </li>
              <li>
                <Link
                  href="/kundenbewertungen"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Bewertungen
                </Link>
              </li>
              <li>
                <Link
                  href="/zertifizierungen"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Zertifizierungen
                </Link>
              </li>
              <li>
                <Link
                  href="/empfehlungsprogramm"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Empfehlungsprogramm
                </Link>
              </li>
              <li>
                <a
                  href="https://join.com/companies/marketingexperten"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Karriere
                </a>
              </li>
              <li>
                <a
                  href="https://www.adlibraryaccelerator.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Ad Library Accelerator
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Leistungen */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[--text-primary] dark:text-[--dark-text-primary]">
              Leistungen
            </h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link
                  href="/perspective-agentur"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Perspective Agentur
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen/meta-ads"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Meta Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen/google-ads"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Google Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen/webdesign-leipzig"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Webdesign Leipzig
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen/webdesign-leipzig"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Website erstellen lassen
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen/webdesign-leipzig"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Onlineshop erstellen lassen
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen/webdesign-leipzig"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Suchmaschinenoptimierung
                </Link>
              </li>
              <li>
                <Link
                  href="/termin-buchen"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Online Mitarbeitergewinnung
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen/webinar-funnels"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Webinar Funnels
                </Link>
              </li>
              <li>
                <Link
                  href="/social-media-recruiting-agentur"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Social Media Recruiting Agentur
                </Link>
              </li>
              <li>
                <Link
                  href="/termin-buchen"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Automatisierungen
                </Link>
              </li>
              <li>
                <Link
                  href="/photovoltaik-leads-kaufen"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Photovoltaik Leads kaufen
                </Link>
              </li>
              <li>
                <Link
                  href="/kostenloser-onlineshop-fuer-lieferdienste"
                  className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
                >
                  Kostenloser Onlineshop für Lieferservices
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Partner/Certification Section */}
        <div className="mt-16 border-t border-[--border] pt-12 dark:border-[--dark-border]">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-6">
            {/* Meta Business Partner */}
            <div className="flex items-center space-x-2 rounded-full bg-blue-600 px-4 py-2">
              <span className="font-bold text-white">M</span>
              <span className="text-sm text-white">Meta Business Partner</span>
            </div>

            {/* TikTok */}
            <div className="rounded-full bg-black px-4 py-2">
              <span className="text-sm font-bold text-white">TikTok</span>
            </div>

            {/* SEHR GUT */}
            <div className="flex items-center space-x-1 rounded bg-yellow-500 px-3 py-2">
              <span className="text-sm font-bold text-black">SEHR GUT</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xs text-black">
                    ★
                  </span>
                ))}
              </div>
            </div>

            {/* Google Partner */}
            <div className="flex items-center space-x-2 rounded bg-blue-600 px-3 py-2">
              <span className="font-bold text-white">G</span>
              <span className="text-sm text-white">Google Partner</span>
            </div>

            {/* WebinarJam */}
            <div className="rounded bg-purple-600 px-3 py-2">
              <span className="text-sm font-bold text-white">WebinarJam</span>
            </div>

            {/* Shopify Partners */}
            <div className="rounded bg-green-600 px-3 py-2">
              <span className="text-sm font-bold text-white">Shopify Partners</span>
            </div>

            {/* SISTRIX */}
            <div className="rounded bg-gray-700 px-3 py-2">
              <span className="text-sm font-bold text-white">SISTRIX Q Marketingexperten</span>
            </div>

            {/* Salesforce Certifications */}
            <div className="rounded bg-blue-500 px-3 py-2">
              <span className="text-xs font-bold text-white">
                SALESFORCE CERTIFIED Administrator
              </span>
            </div>

            <div className="rounded bg-blue-500 px-3 py-2">
              <span className="text-xs font-bold text-white">
                SALESFORCE CERTIFIED Marketing Cloud Email Specialist
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="flex items-center justify-center space-x-2 text-base text-[--text-secondary] dark:text-[--dark-text-secondary]">
              <span className="text-yellow-400">✨</span>
              <span>
                Our services are <strong>multi-certified</strong> &{" "}
                <strong>excellently rated</strong>.
              </span>
            </p>
          </div>
        </div>

        {/* Bottom Bar - Legal Links */}
        <div className="mt-12 border-t border-[--border] pt-6 dark:border-[--dark-border]">
          <div className="flex flex-wrap justify-center gap-8 text-base">
            <Link
              href="/impressum"
              className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutzerklaerung"
              className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
            >
              Datenschutzerklärung
            </Link>
            <Link
              href="/agb"
              className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
            >
              AGB
            </Link>
            <Link
              href="/cookie-einstellungen"
              className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
            >
              Cookie Einstellungen
            </Link>
            <Link
              href="/sitemap"
              className="text-[--text-secondary] transition-colors hover:text-[--accent-500] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-accent-500]"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
