/**
 * Configurazione centralizzata dei domini, metadati e dati aziendali di Pizzeria Rainbow.
 *
 * REGOLA ASSOLUTA: 'Example SRL' e '00000000000' non devono essere modificati arbitrariamente.
 * Verranno sostituiti manualmente con i dati definitivi in sede di pubblicazione.
 */

export const SITE_CONFIG = {
  name: 'Pizzeria Rainbow',
  legalName: 'Example SRL', // REGOLA: Non modificare
  vatNumber: '00000000000', // REGOLA: Non modificare
  fiscalCode: '00000000000', // REGOLA: Non modificare
  
  // Dati di contatto
  telephone: '+390766370162',
  displayPhone: '0766 370162',
  
  // Indirizzo fisico dell'attività a Civitavecchia
  address: {
    streetAddress: 'Via Luigi Sabatini, 2',
    addressLocality: 'Civitavecchia',
    addressRegion: 'RM',
    postalCode: '00053',
    addressCountry: 'IT',
  },
  
  // Coordinate geografiche Civitavecchia centro
  geo: {
    latitude: 42.0924,
    longitude: 11.7964,
  },
  
  // Dominio di produzione ufficiale previsto
  officialDomain: 'https://pizzeriarainbowcivitavecchia.it',
  
  // Google Maps link diretto
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Luigi+Sabatini+2+00053+Civitavecchia+RM',
  
  // Orari di apertura per Schema.org e consultazione
  openingHoursSpecification: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Sunday'],
      opens: '18:30',
      closes: '22:30',
    },
    {
      dayOfWeek: ['Saturday'],
      opens: '18:30',
      closes: '23:00',
    },
  ],
  
  servesCuisine: ['Pizza', 'Cucina Italiana', 'Primi Piatti Tradizionali', 'Carne alla Brace'],
  priceRange: '€€',
} as const;
