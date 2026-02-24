export interface Area {
  name: string;
  region: string;
  popular: boolean;
}

export const mumbaiAreas: Area[] = [
  { name: "Andheri", region: "Western Suburbs", popular: true },
  { name: "Bandra", region: "Western Suburbs", popular: true },
  { name: "Borivali", region: "Western Suburbs", popular: true },
  { name: "Malad", region: "Western Suburbs", popular: true },
  { name: "Goregaon", region: "Western Suburbs", popular: true },
  { name: "Kandivali", region: "Western Suburbs", popular: false },
  { name: "Jogeshwari", region: "Western Suburbs", popular: false },
  { name: "Vile Parle", region: "Western Suburbs", popular: false },
  { name: "Santacruz", region: "Western Suburbs", popular: false },
  { name: "Juhu", region: "Western Suburbs", popular: true },
  { name: "Versova", region: "Western Suburbs", popular: false },
  { name: "Lokhandwala", region: "Western Suburbs", popular: false },
  { name: "Oshiwara", region: "Western Suburbs", popular: false },

  { name: "Thane", region: "Thane", popular: true },
  { name: "Mulund", region: "Thane", popular: true },
  { name: "Bhandup", region: "Thane", popular: false },
  { name: "Ghodbunder Road", region: "Thane", popular: false },
  { name: "Kalyan", region: "Thane", popular: true },
  { name: "Dombivli", region: "Thane", popular: true },
  { name: "Bhiwandi", region: "Thane", popular: false },
  { name: "Ulhasnagar", region: "Thane", popular: false },

  { name: "Kurla", region: "Central Suburbs", popular: true },
  { name: "Ghatkopar", region: "Central Suburbs", popular: true },
  { name: "Vikhroli", region: "Central Suburbs", popular: false },
  { name: "Powai", region: "Central Suburbs", popular: true },
  { name: "Chembur", region: "Central Suburbs", popular: true },
  { name: "Sion", region: "Central Suburbs", popular: false },
  { name: "Dadar", region: "Central Suburbs", popular: true },
  { name: "Wadala", region: "Central Suburbs", popular: false },

  { name: "Colaba", region: "South Mumbai", popular: true },
  { name: "Churchgate", region: "South Mumbai", popular: false },
  { name: "Fort", region: "South Mumbai", popular: false },
  { name: "Marine Lines", region: "South Mumbai", popular: false },
  { name: "Worli", region: "South Mumbai", popular: true },
  { name: "Lower Parel", region: "South Mumbai", popular: true },
  { name: "Prabhadevi", region: "South Mumbai", popular: false },
  { name: "Mahalaxmi", region: "South Mumbai", popular: false },

  { name: "Navi Mumbai", region: "Navi Mumbai", popular: true },
  { name: "Vashi", region: "Navi Mumbai", popular: true },
  { name: "Nerul", region: "Navi Mumbai", popular: false },
  { name: "Belapur", region: "Navi Mumbai", popular: true },
  { name: "Panvel", region: "Navi Mumbai", popular: true },
  { name: "Kharghar", region: "Navi Mumbai", popular: true },
  { name: "Airoli", region: "Navi Mumbai", popular: false },
  { name: "Sanpada", region: "Navi Mumbai", popular: false },
  { name: "Kopar Khairane", region: "Navi Mumbai", popular: false },

  { name: "Mira Road", region: "Nearby Regions", popular: true },
  { name: "Vasai", region: "Nearby Regions", popular: true },
  { name: "Virar", region: "Nearby Regions", popular: true },
  { name: "Nalasopara", region: "Nearby Regions", popular: false },
  { name: "Palghar", region: "Nearby Regions", popular: false },
  { name: "Badlapur", region: "Nearby Regions", popular: false },
  { name: "Ambernath", region: "Nearby Regions", popular: false },
  { name: "Karjat", region: "Nearby Regions", popular: false },
];

export const regions = ["Western Suburbs", "Central Suburbs", "South Mumbai", "Thane", "Navi Mumbai", "Nearby Regions"];

export function getAreasByRegion(region: string): Area[] {
  return mumbaiAreas.filter((a) => a.region === region);
}
