"use client";
import CardProdutoDetails from "@/app/Components/CardProdutoDetails";
import Header from "@/app/Components/Header";
import { Produto } from "@/app/data/models/produto";
import { getProduto } from "@/app/data/services/apiProduto";
import { store } from "@/app/features/redux/store";
import { UUID } from "crypto";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";

export default function ProdutoDetails({ params }: { params: { id: UUID } }) {
  const [produto, setProduto] = useState({
    nome: "",
    descricao: "",
    preco: 0,
  } as Produto);
  useEffect(() => {
    getProduto(params.id).then((x) => {
      setProduto(x.data);
    });
  }, []);
  return (
    <Provider store={store}>
      <Header />
      <Container className="d-flex flex-column align-items-center">
        {produto.id && <CardProdutoDetails produto={produto} />}
      </Container>
    </Provider>
  );
}
