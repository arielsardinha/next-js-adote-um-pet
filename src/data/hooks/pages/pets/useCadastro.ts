import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { ApiService } from "../../../services/ApiService";

export function useCadastro() {
  const [nome, setNome] = useState("");
  const [historia, setHistoria] = useState("");
  const [foto, setFoto] = useState("");
  const [mensagem, setMensagem] = useState("");

  function cadastrar() {
    if (validarFormulario()) {
      ApiService.post("/pets", {
        nome,
        historia,
        foto,
      })
        .then((response) => {
          limpar();
          setMensagem("Pet cadastrado com sucesso!");
        })
        .catch((error: AxiosError<any>) => {
          setMensagem(error.response?.data.message);
        });
    } else {
      setMensagem("Preencha todos os campos");
    }
  }

  function validarFormulario() {
    return nome.length > 2 && historia.length > 20 && foto.length > 5;
  }

  function limpar() {
    setNome("");
    setHistoria("");
    setFoto("");
  }

  return {
    nome,
    historia,
    foto,
    setNome,
    setHistoria,
    setFoto,
    cadastrar,
    mensagem,
    setMensagem,
  };
}
