"use client";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import CadastroForm from "@/app/Components/FormCliente";
import Header from "@/app/Components/Header";
import { ClienteInput } from "@/app/data/models/cliente";
import { createCliente } from "@/app/data/services/apiCliente";
import { Provider } from "react-redux";
import { store } from "@/app/features/redux/store";

export default function NovoCliente() {
  const createHandler = (cliente:ClienteInput) => {
    return createCliente(cliente);
  } 
  return (
    <Provider store={store}>
      <Header />
      <Container className="w-100 d-flex flex-column align-items-center">
        <h1>Novo Cliente</h1>
        <CadastroForm handler={createHandler} method="Cadastrar"/>
      </Container>
    </Provider>
  );
}
