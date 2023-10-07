import { HistoricoCompra } from "@/app/data/models/loja";
import React from "react";
import Card from "react-bootstrap/esm/Card";

export default function CardVenda(props: { venda: HistoricoCompra }) {
  return (
    <>
      <Card key={props.venda.id} className="w-25">
        <Card.Header>
          <Card.Title>{props.venda.nomeProduto}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>{props.venda.nomeCliente}</Card.Text>
          <Card.Text>{props.venda.quantidade}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
