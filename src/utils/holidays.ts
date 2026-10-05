export interface HolidayInfo {
  isHoliday: boolean;
  name?: string;
}

/**
 * Calcola Pasqua con l'algoritmo di Meeus/Jones/Butcher
 */
export function getEasterDate(year: number): { month: number; day: number } {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31) - 1; // 0-indexed: 2 = Marzo, 3 = Aprile
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return { month, day };
}

/**
 * Calcola il Lunedì dell'Angelo (Pasquetta)
 */
export function getEasterMondayDate(year: number): { month: number; day: number } {
  const easter = getEasterDate(year);
  const date = new Date(year, easter.month, easter.day);
  date.setDate(date.getDate() + 1);
  return { month: date.getMonth(), day: date.getDate() };
}

/**
 * Verifica se una specifica data corrisponde a un giorno festivo
 * (festività nazionali italiane + Santa Fermina patrona di Civitavecchia)
 */
export function checkHoliday(date: Date): HolidayInfo {
  const month = date.getMonth(); // 0-11
  const day = date.getDate();
  const year = date.getFullYear();

  // Festività a data fissa (mese 0-indexed)
  const fixedHolidays: { [key: string]: string } = {
    '0-1': 'Capodanno',
    '0-6': 'Epifania',
    '3-25': 'Festa della Liberazione',
    '3-28': 'Santa Fermina (Patrona di Civitavecchia)',
    '4-1': 'Festa del Lavoro',
    '5-2': 'Festa della Repubblica',
    '7-15': 'Ferragosto (Assunzione)',
    '10-1': 'Tutti i Santi',
    '11-8': 'Immacolata Concezione',
    '11-25': 'Natale',
    '11-26': 'Santo Stefano',
    '11-31': 'San Silvestro',
  };

  const key = `${month}-${day}`;
  if (fixedHolidays[key]) {
    return { isHoliday: true, name: fixedHolidays[key] };
  }

  // Pasqua
  const easter = getEasterDate(year);
  if (month === easter.month && day === easter.day) {
    return { isHoliday: true, name: 'Pasqua' };
  }

  // Pasquetta (Lunedì dell'Angelo)
  const easterMonday = getEasterMondayDate(year);
  if (month === easterMonday.month && day === easterMonday.day) {
    return { isHoliday: true, name: "Lunedì dell'Angelo (Pasquetta)" };
  }

  return { isHoliday: false };
}

/**
 * Restituisce le festività che cadono nella settimana corrente (da Lunedì a Domenica)
 * Mappate per giorno della settimana (0 = Domenica, 1 = Lunedì, ..., 6 = Sabato)
 */
export function getWeekHolidays(referenceDate = new Date()): Map<number, { name: string; dateStr: string }> {
  const holidaysMap = new Map<number, { name: string; dateStr: string }>();

  // Calcola il lunedì della settimana corrente
  const currentDay = referenceDate.getDay(); // 0 = Domenica, 1 = Lunedì, ..., 6 = Sabato
  const diffToMonday = currentDay === 0 ? -6 : 1 - currentDay;

  const monday = new Date(referenceDate);
  monday.setDate(referenceDate.getDate() + diffToMonday);
  monday.setHours(0, 0, 0, 0);

  // Controlla i 7 giorni da lunedì a domenica
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const dayOfWeek = d.getDay();
    const info = checkHoliday(d);
    if (info.isHoliday && info.name) {
      const formattedDate = `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`;
      holidaysMap.set(dayOfWeek, { name: info.name, dateStr: formattedDate });
    }
  }

  return holidaysMap;
}
