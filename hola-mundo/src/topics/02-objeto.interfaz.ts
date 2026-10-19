let habilidades = ['Resistencia', 'Fuerza', 'Velocidad'];

let habilidades2: (string | number | boolean)[];

let habilidades3 = [
  'Resistencia',
  'Fuerza',
  'Velocidad',
  true,
  122
];

let habilidades4: string[] = [
  'Velocidad',
  'Magia',
  'Curacion'
];

const personaje = {
  nombre: 'Goku',
  pv: 100,
  habilidad: ['Fuerza', 'Velocidad']
};

interface Personaje {
  nombre: string;
  pv: number;
  habilidad: string[];
  procedencia?: string;
}

const saiyan: Personaje = {
  nombre: 'Goku',
  pv: 100,
  habilidad: ['Superguerrero', 'Bondadoso'],
  procedencia: 'La Tierra'
};

console.table(saiyan);

export {};