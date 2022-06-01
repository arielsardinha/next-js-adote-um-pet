import type { NextPage } from "next";
import Lista from "../ui/components/Lista/Lista";
import Titulo from "../ui/components/Titulo/Titulo";

const Home: NextPage = () => {
  return (
    <div>
      <Titulo
        titulo=""
        subtitulo={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />
      <Lista
        pets={[
          {
            id: 1,
            name: "Bidu",
            historia: "dwad ad a da dw ",
            foto: "https://www.bing.com/th?id=OIP.Wc01QUsZYC8kYHhwjMdXdgHaHt&w=244&h=255&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
          },
          {
            id: 2,
            name: "Bidu",
            historia: "dwad ad a da dw ",
            foto: "https://www.bing.com/th?id=OIP.Wc01QUsZYC8kYHhwjMdXdgHaHt&w=244&h=255&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
          },
        ]}
      />
    </div>
  );
};

export default Home;
