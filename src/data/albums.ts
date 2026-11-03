export interface Album {
  id: string;
  band: string;
  title: string;
  year?: number;
  /** Ruta opcional a la portada en /public/albums/ */
  cover?: string;
  /** Color de acento para el disco y el póster */
  accentColor: string;
}

/**
 * Lista dinámica de álbumes para el reproductor de CD/DVD y el póster de la pared.
 * Agrega o edita elementos aquí cuando definas tu selección final.
 */
export const albums: Album[] = [
  {
    id: 'white-pony',
    band: 'Deftones',
    title: 'White Pony',
    year: 2000,
    accentColor: '#38bdf8',
  },
];
