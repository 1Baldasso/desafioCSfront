"use client";
import Header from "@/app/Components/Header";
import { Cliente } from "@/app/data/models/cliente";
import { getCliente } from "@/app/data/services/apiCliente";
import { store } from "@/app/features/redux/store";
import { UUID } from "crypto";
import React, { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";

import CardClienteDetails from "@/app/Components/CardClienteDetails";
import Container from "react-bootstrap/esm/Container";
import { login } from "@/app/features/redux/login/reducer";

export default function ClienteDetailsWrapper({ params }: { params: { id: UUID } }){
  return (
    <Provider store={store}>
      <ClienteDetails id={params.id}/>
    </Provider>
  )
}

function ClienteDetails(props: {id: UUID}) {
  const dispatch = useDispatch();
  const [cliente, setCliente] = useState<Cliente>({
    nome: "",
    email: "",
    cpf: "",
  } as Cliente);
  useEffect(() => {
    getCliente(props.id)
      .then((x) => {
        console.log(x.data);
        setCliente(x.data);
        dispatch(login(x.data))
      })
      .catch((x) => {
        console.log(x);
      });
  }, []);

  return (
    <Provider store={store}>
      <Header />
      <Container className="d-flex flex-column align-items-center">
        <h2>Cliente Details</h2>
        <CardClienteDetails cliente={cliente}/>
      </Container>
    </Provider>
  );
}
