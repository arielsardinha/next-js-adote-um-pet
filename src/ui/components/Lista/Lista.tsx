import { Button } from "@mui/material";
import { Pet } from "../../../data/@types/pet";
import { TextService } from "../../../data/services/TextService";

import {
  ListaStyled,
  ItemLista,
  Foto,
  Informacoes,
  Nome,
  Descricao,
} from "./Lista.style";

interface ListaProps {
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

export default function Lista({ pets, onSelect }: ListaProps) {
  const tamanhoMaximoTexto = 200;

  return (
    <ListaStyled>
      {pets.map((pet) => (
        <ItemLista key={pet.id}>
          <Foto src={pet.foto} alt={pet.name} />
          <Informacoes>
            <div>
              <Nome>{pet.name}</Nome>
              <Descricao>
                {TextService.limitarText(pet.historia, tamanhoMaximoTexto)}
              </Descricao>
            </div>

            <Button
              onClick={() => onSelect(pet)}
              variant={"contained"}
              fullWidth
            >
              Adotar
            </Button>
          </Informacoes>
        </ItemLista>
      ))}
    </ListaStyled>
  );
}
