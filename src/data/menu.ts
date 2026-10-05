const base = import.meta.env.BASE_URL;

export interface MenuItem {
  id: string;
  name: string;
  category: 'pizze' | 'primi' | 'secondi' | 'dolci-bevande';
  categoryLabel: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
  vegetarian?: boolean;
  /**
   * Ingredienti principali dichiarati (predisposto per modifiche puntuali)
   */
  ingredients?: string[];
  /**
   * Allergeni alimentari certificati ai sensi del Reg. UE 1169/2011.
   * NOTA DI CONFORMITÀ: Non vengono inseriti allergeni inventati o presunti.
   * Il campo è predisposto per accogliere i dati ufficiali dal registro allergeni/HACCP della pizzeria.
   */
  allergens?: string[];
}

export const menuCategories = [
  { id: 'all', label: 'Tutti i Piatti' },
  { id: 'pizze', label: 'Pizze Tradizionali' },
  { id: 'primi', label: 'Primi di Pasta' },
  { id: 'secondi', label: 'Secondi di Carne' },
  { id: 'dolci-bevande', label: 'Dolci & Bevande' },
] as const;

export const menuItems: MenuItem[] = [
  // PIZZE
  {
    id: 'margherita-classica',
    name: 'Margherita Tradizionale',
    category: 'pizze',
    categoryLabel: 'Pizze',
    description: 'Pomodoro San Marzano DOP, mozzarella fior di latte, basilico fresco e un filo d’olio extravergine d’oliva.',
    price: '€ 7,50',
    image: `${base}images/pizza-margherita.jpg`,
    popular: true,
    vegetarian: true,
  },
  {
    id: 'diavola-rainbow',
    name: 'Diavola Rustica',
    category: 'pizze',
    categoryLabel: 'Pizze',
    description: 'Pomodoro San Marzano, fior di latte, salame piccante artigianale campano e peperoncino.',
    price: '€ 9,00',
    image: `${base}images/pizza-margherita.jpg`,
    popular: true,
  },
  {
    id: 'quattro-formaggi',
    name: 'Quattro Formaggi Nostrana',
    category: 'pizze',
    categoryLabel: 'Pizze',
    description: 'Fiordilatte, gorgonzola dolce DOP, fontina dop, scaglie di Grana Padano riserva.',
    price: '€ 10,00',
    image: `${base}images/pizza-margherita.jpg`,
    vegetarian: true,
  },
  {
    id: 'capricciosa-storica',
    name: 'Capricciosa Rainbow',
    category: 'pizze',
    categoryLabel: 'Pizze',
    description: 'Pomodoro, fiordilatte, prosciutto cotto scelto, funghi champignon freschi, carciofi alla romana, olive nere.',
    price: '€ 10,50',
    image: `${base}images/pizza-margherita.jpg`,
  },
  {
    id: 'boscaiola-speciale',
    name: 'Boscaiola con Salsiccia',
    category: 'pizze',
    categoryLabel: 'Pizze',
    description: 'Fiordilatte, salsiccia nostrana di macelleria locale, funghi porcini trifolati e una punta di pepe.',
    price: '€ 11,00',
    image: `${base}images/pizza-margherita.jpg`,
    popular: true,
  },
  {
    id: 'bufalina-fresca',
    name: 'Bufalina & Pomodorini',
    category: 'pizze',
    categoryLabel: 'Pizze',
    description: 'Pomodoro San Marzano, mozzarella di bufala a crudo, datterini confit, olio al basilico fresco.',
    price: '€ 11,50',
    image: `${base}images/pizza-margherita.jpg`,
    vegetarian: true,
  },

  // PRIMI DI PASTA
  {
    id: 'spaghetti-carbonara',
    name: 'Spaghetti alla Carbonara',
    category: 'primi',
    categoryLabel: 'Primi di Pasta',
    description: 'Pasta di Gragnano IGP, guanciale laziale croccante, tuorlo d’uovo fresco, Pecorino Romano DOP e pepe nero tostato.',
    price: '€ 11,00',
    image: `${base}images/primi-pasta.jpg`,
    popular: true,
  },
  {
    id: 'rigatoni-amatriciana',
    name: 'Rigatoni all’Amatriciana',
    category: 'primi',
    categoryLabel: 'Primi di Pasta',
    description: 'Sugo al pomodoro San Marzano lento, guanciale artigianale sfumato al vino bianco, Pecorino Romano DOP abbondante.',
    price: '€ 11,00',
    image: `${base}images/primi-pasta.jpg`,
    popular: true,
  },
  {
    id: 'tonnarelli-cacio-pepe',
    name: 'Tonnarelli Cacio e Pepe',
    category: 'primi',
    categoryLabel: 'Primi di Pasta',
    description: 'Tonnarelli all’uovo fatti in casa mantecati con crema vellutata di Pecorino Romano DOP e macinata fresca di pepe nero.',
    price: '€ 10,50',
    image: `${base}images/primi-pasta.jpg`,
    vegetarian: true,
  },
  {
    id: 'fettuccine-funghi-porcini',
    name: 'Fettuccine ai Funghi Porcini',
    category: 'primi',
    categoryLabel: 'Primi di Pasta',
    description: 'Fettuccine tirate a mano, funghi porcini profumati al timo fresco, aglio dolce e prezzemolo fresco.',
    price: '€ 12,50',
    image: `${base}images/primi-pasta.jpg`,
  },

  // SECONDI DI CARNE
  {
    id: 'tagliata-manzo-rucola-grana',
    name: 'Tagliata di Manzo Rucola e Grana',
    category: 'secondi',
    categoryLabel: 'Secondi di Carne',
    description: 'Tagliata di manzo scelta cotta su brace ardente (300g), rucola fresca di campo, petali di Grana Padano DOP e riduzione balsamica.',
    price: '€ 18,50',
    image: `${base}images/secondi-carne.jpg`,
    popular: true,
  },
  {
    id: 'tagliata-rosmarino-sale',
    name: 'Tagliata al Sale Grosso e Rosmarino',
    category: 'secondi',
    categoryLabel: 'Secondi di Carne',
    description: 'Controfiletto di manzo al sangue o media cottura, insaporito con sale grosso dolce, rosmarino fresco e olio EVO.',
    price: '€ 17,50',
    image: `${base}images/secondi-carne.jpg`,
  },
  {
    id: 'grigliata-mista-carne',
    name: 'Grigliata Mista alla Brace',
    category: 'secondi',
    categoryLabel: 'Secondi di Carne',
    description: 'Composizione di salsiccia di maiale paesana, spuntatura caramellata, arrosticini e bistecca di vitella con patate al forno.',
    price: '€ 19,50',
    image: `${base}images/secondi-carne.jpg`,
    popular: true,
  },
  {
    id: 'bistecca-vitella',
    name: 'Bistecca di Vitella con Patate Dorate',
    category: 'secondi',
    categoryLabel: 'Secondi di Carne',
    description: 'Cotto alla brace a carbone di legna, accompagnata da patate rustiche al forno con rosmarino e aglio in camicia.',
    price: '€ 16,00',
    image: `${base}images/secondi-carne.jpg`,
  },

  // DOLCI & BEVANDE
  {
    id: 'tiramisu-della-casa',
    name: 'Tiramisù della Casa',
    category: 'dolci-bevande',
    categoryLabel: 'Dolci & Bevande',
    description: 'Ricetta classica della casa: savoiardi imbevuti di vero espresso italiano, mascarpone montato a mano e cacao amaro.',
    price: '€ 5,50',
    image: `${base}images/dessert-dolce.jpg`,
    popular: true,
    vegetarian: true,
  },
  {
    id: 'panna-cotta-artigianale',
    name: 'Panna Cotta ai Frutti di Bosco',
    category: 'dolci-bevande',
    categoryLabel: 'Dolci & Bevande',
    description: 'Crema di latte e vaniglia naturale del Madagascar con coulis tiepido di frutti di bosco o caramello salato.',
    price: '€ 5,00',
    image: `${base}images/dessert-dolce.jpg`,
    vegetarian: true,
  },
  {
    id: 'birre-alla-spina',
    name: 'Birre alla Spina & Artigianali',
    category: 'dolci-bevande',
    categoryLabel: 'Dolci & Bevande',
    description: 'Bionda tradizionale fresca, rossa doppio malto e selezione di birre artigianali laziali in bottiglia (33cl/75cl).',
    price: 'da € 3,50',
    image: `${base}images/bevande-birra.jpg`,
  },
  {
    id: 'vino-della-casa',
    name: 'Vino dei Castelli Romani & Nazionali',
    category: 'dolci-bevande',
    categoryLabel: 'Dolci & Bevande',
    description: 'Vino bianco e rosso della casa in caraffa (1/4L, 1/2L, 1L) e carta dei vini selezionati del territorio regionale.',
    price: 'da € 4,00',
    image: `${base}images/bevande-vino.jpg`,
  },
];