import {
  CabecalhoContainer,
  LinksContainer,
  Logo,
} from "./CabecalhoAdmin.style";
import { Link, Box } from "@mui/material";
import NextLink from "next/link";
export default function CabecalhoAdmin() {
  return (
    <div>
      <CabecalhoContainer>
        <div>
          <Logo src={"/imagens/logo.svg"} alt={"Adote um pet"} />
          <LinksContainer>
            <Link href={"/pets/cadastro"} component={NextLink}>
              <a>Cadastrar Pet</a>
            </Link>
            <Link href={"/pets/relatorio"} component={NextLink}>
              <a>
                Relatório{" "}
                <Box
                  component={"span"}
                  sx={{ display: { sm: "initial", sx: "none" } }}
                >
                  de Adoção
                </Box>
              </a>
            </Link>
          </LinksContainer>
        </div>
      </CabecalhoContainer>
    </div>
  );
}
