import { Cliente } from "@/app/data/models/cliente";
import { Produto } from "@/app/data/models/produto";
import { deleteProduto } from "@/app/data/services/apiProduto";
import { RootState } from "@/app/features/redux/store";
import React from "react";
import Card from "react-bootstrap/esm/Card";
import { useSelector } from "react-redux";
export default function CardClienteDetails(
  props: { produto: Produto },
) {
    const user = useSelector((state: RootState) => state.login.value);
  const handleDelete = () => {
    console.log("deletando");
    deleteProduto(props.produto.id).then((x) => {
      console.log(x);
      window.location.href = "/clientes";
    });
  };
  return (
    <>
      <Card className="w-25">
        <Card.Header>
          <Card.Title>{props.produto.nome}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>{props.produto.descricao}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <Card.Link
                href={`/loja/comprar/${props.produto.id}?userId=${user.id}`}
            >
                Comprar
            </Card.Link>
          <Card.Link href={`/produtos/${props.produto.id}/editar/`}>
            Editar
          </Card.Link>
          <Card.Link onClick={handleDelete}>Excluir</Card.Link>
        </Card.Footer>
      </Card>
    </>
  );
}
