import { text } from "stream/consumers";

export const TextService = {
  limitarText(texto: string, tamanhoMaximo: number): string {
    if (texto.length < tamanhoMaximo) {
      return texto;
    }

    return texto.slice(0, tamanhoMaximo) + "...";
  },
};
