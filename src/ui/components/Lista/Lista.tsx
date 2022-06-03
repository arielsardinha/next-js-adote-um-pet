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
}

export default function Lista({ pets }: ListaProps) {
  const tamanhoMaximoTexto = 200;

  return (
    <ListaStyled>
      {pets.map((pet) => (
        <ItemLista key={pet.id}>
          <Foto src={pet.foto} />
          <Informacoes>
            <Nome>{pet.name}</Nome>
            <Descricao>
              {TextService.limitarText(pet.historia, tamanhoMaximoTexto)}
            </Descricao>

            <Button variant={"contained"} fullWidth>
              Adotar
            </Button>
          </Informacoes>
        </ItemLista>
      ))}
    </ListaStyled>
  );
}
