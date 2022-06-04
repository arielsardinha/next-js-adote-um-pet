import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { Pet } from "../../@types/pet";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
  const [listaPets, setListaPets] = useState<Pet[]>([]);
  const [petSelecionado, setPetSelecionado] = useState<Pet | null>(null);
  const [email, setEmail] = useState("");
  const [valor, setValor] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    ApiService.get("/pets").then((resposta) => {
      setListaPets(resposta.data);
    });
  }, []);

  function adotar() {
    if (petSelecionado !== null) {
      if (validarDadosAdocao()) {
        ApiService.post("/adocoes", {
          pet_Id: petSelecionado.id,
          email,
          valor,
        })
          .then((resposta) => {
            setPetSelecionado(null);
            setEmail("Pet adotado com sucesso!");
            limparFormulario();
          })
          .catch((erro: AxiosError<any>) => {
            erro.response?.status === 500 && setMensagem(erro.response?.statusText);

            erro.response?.data.mensagem &&
              setMensagem(erro.response.data.mensagem);
          });
      } else {
        setMensagem("Preencha todos os campso corretamente !");
      }
    }
  }

  function validarDadosAdocao() {
    return email.length > 0 && valor.length > 0;
  }

  function limparFormulario() {
    setEmail("");
    setValor("");
  }

  return {
    listaPets,
    petSelecionado,
    setPetSelecionado,
    valor,
    setValor,
    email,
    setEmail,
    mensagem,
    setMensagem,
    adotar,
  };
}
