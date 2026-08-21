import { MapPin, Phone } from 'lucide-react';

export const COMPANY = {
  legalName: 'NEOVOGENT AI SOLUTIONS UK LTD',
  brand: 'Neovogent AI',
  phoneDisplay: '+44 7713 623778',
  phoneHref: 'tel:+447713623778',
  address: {
    street: 'Suite 5, The Cloisters, 11-12 George Road',
    locality: 'Edgbaston',
    region: 'Birmingham',
    postalCode: 'B15 1NP',
    country: 'United Kingdom',
    countryCode: 'GB',
  },
};

export default function Footer() {
  const { legalName, brand, phoneDisplay, phoneHref, address } = COMPANY;

  return (
    <footer
      id="footer"
      itemScope
      itemType="https://schema.org/Organization"
      className="relative bg-space-900 border-t border-black/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Company */}
          <div>
            <p className="font-display text-2xl font-semibold text-zinc-900 tracking-tight">{brand}</p>
            <p itemProp="legalName" className="mt-2 text-sm font-medium text-zinc-800 uppercase tracking-wide">
              {legalName}
            </p>
            <meta itemProp="name" content={legalName} />
            <p className="mt-3 text-sm text-zinc-500 font-light max-w-xs">
              Specialized AI assistants working 24/7 for your business.
            </p>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">Registered Office</h3>
            <address
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
              className="not-italic text-sm text-zinc-700 leading-relaxed flex gap-3"
            >
              <MapPin className="w-4 h-4 mt-1 text-blue-600 shrink-0" aria-hidden="true" />
              <span>
                <span itemProp="streetAddress">{address.street}</span>
                <br />
                <span itemProp="addressLocality">{address.locality}</span>,{' '}
                <span itemProp="addressRegion">{address.region}</span>
                <br />
                <span itemProp="addressCountry">{address.country}</span>,{' '}
                <span itemProp="postalCode">{address.postalCode}</span>
              </span>
            </address>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">Contact</h3>
            <a
              href={phoneHref}
              itemProp="telephone"
              content={phoneDisplay}
              className="inline-flex items-center gap-3 text-sm text-zinc-700 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600 shrink-0" aria-hidden="true" />
              <span>{phoneDisplay}</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} {legalName}. All rights reserved.
          </p>
          <p>Registered in England &amp; Wales.</p>
        </div>
      </div>
    </footer>
  );
}
