"use client";
import FormProduto from "@/app/Components/FormProduto";
import Header from "@/app/Components/Header";
import { createProduto } from "@/app/data/services/apiProduto";
import { store } from "@/app/features/redux/store";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";

export default function NovoProduto() {
  return (
    <Provider store={store}>
      <Header />
      <Container className="d-flex flex-column align-items-center">
        <h1>Novo Produto</h1>
        <FormProduto handler={createProduto} method="Cadastrar" />
      </Container>
    </Provider>
  );
}
