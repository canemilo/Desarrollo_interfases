interface Alumno {
  nombre: string;
  apellido: string;
  nacionalidad: string;
  anio_nacimiento: number;
  telefono: number;
  correo_electronico: string;
  modulos_profesionales_matriculados: string[];
  convalida_ipe: boolean;
  nivel_padel?: number;       // Campo opcional
  centro_procedencia?: string; // Campo opcional
}

// Variable 1: Alumno con todos los datos (incluyendo los opcionales)
const alumno1: Alumno = {
  nombre: "Laura",
  apellido: "García López",
  nacionalidad: "Española",
  anio_nacimiento: 2002,
  telefono: 600123456,
  correo_electronico: "laura.garcia@email.com",
  modulos_profesionales_matriculados: ["Desarrollo Web en Entorno Cliente", "Diseño de Interfaces"],
  convalida_ipe: false,
  nivel_padel: 3,
  centro_procedencia: "IES Tecnológico"
};

// Variable 2: Alumno solo con los datos obligatorios
const alumno2: Alumno = {
  nombre: "Daniel",
  apellido: "Perez Molina",
  nacionalidad: "Española",
  anio_nacimiento: 1999,
  telefono: 600600600,
  correo_electronico: "Daniel@email.com",
  modulos_profesionales_matriculados: ["Desarrollo Aplicaciones Multiplataforma"],
  convalida_ipe: false
};

// Imprimir las variables para evitar el error de "variable declarada pero no usada"
console.table([alumno1, alumno2]);