import { Pet } from "./pet";

export interface Relatorio {
  id: number;
  email: string;
  valor: string;
  pet: Pet;
}
