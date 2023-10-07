import { Produto } from "@/app/data/models/produto";
import { RootState } from "@/app/features/redux/store";
import { UUID } from "crypto";
import React from "react";
import Card from "react-bootstrap/esm/Card";
import { useSelector } from "react-redux";

export default function CardProduto(props: {
  produto: Produto;
}) {
  const user = useSelector((state: RootState) => state.login.value);
  return (
    <>
      <Card key={props.produto.id} className="w-25">
        <Card.Header>
          <Card.Title>{props.produto.nome}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>{props.produto.descricao}</Card.Text>
          <Card.Text>{props.produto.preco}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link href={`/produtos/${props.produto.id}/editar/`}>
            Editar
          </Card.Link>
          <Card.Link
            href={`/loja/comprar/${props.produto.id}?userId=${user.id}`}
          >
            Comprar
          </Card.Link>
        </Card.Footer>
      </Card>
    </>
  );
}
