import { NextPage } from "next";
import Titulo from "../../ui/components/Titulo/Titulo";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useRelatorio } from "../../data/hooks/pages/pets/useRelatorio";
import React from "react";
const Relatorio: NextPage = () => {
  const { listaRelatorio } = useRelatorio();
  return (
    <div>
      <Titulo
        titulo={"Relatório de Adoção"}
        subtitulo={"Veja a lista de pets adotados"}
      />
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 830, md: "auto", p: { sx: 3, md: 5 } }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pet</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell align={"right"}>Valor mensal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listaRelatorio.map((relatorio) => (
              <TableRow key={relatorio.id}>
                <TableCell>{relatorio.pet.nome}</TableCell>
                <TableCell>{relatorio.email}</TableCell>
                <TableCell align={"right"}>{relatorio.valor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Relatorio;
