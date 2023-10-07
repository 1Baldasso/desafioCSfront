"use client";
import FormCliente from "@/app/Components/FormCliente";
import Header from "@/app/Components/Header";
import { Cliente, ClienteInput } from "@/app/data/models/cliente";
import { getCliente, updateCliente } from "@/app/data/services/apiCliente";
import { store } from "@/app/features/redux/store";
import { UUID, randomUUID } from "crypto";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";

export default function EditarCliente({ params }: { params: { id: UUID } }) {
  const [cliente, setCliente] = useState<Cliente>({ nome:"", email:"", cpf: "" } as Cliente);
  useEffect(() => {
    getCliente(params.id)
      .then((x) => {
        console.log(x.data);
        setCliente(x.data);
      })
      .catch((x) => {
        console.log(x.message);
      });
  },[]);
  const updateHandler = (cl: ClienteInput) => {
    return updateCliente(cliente.id, cl);
  }
  return (
    <Provider store={store}>
      <Header />
      <Container className="d-flex flex-column align-items-center">
        <h1>Editar Cliente</h1>
        {cliente.id && <FormCliente
          cliente={cliente}
          method="Editar"
          handler={updateHandler}
        />}
        
      </Container>
    </Provider>
  );
}
