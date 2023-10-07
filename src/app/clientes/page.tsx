"use client";
import React, { useEffect, useState } from "react";
import { Cliente } from "../data/models/cliente";
import { getClientes } from "../data/services/apiCliente";
import Header from "../Components/Header";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import { store } from "../features/redux/store";
import CardCliente from "../Components/CardCliente";
export default function Clientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  useEffect(() => {
    getClientes()
      .then((x) => {
        console.log(x.data);
        setClientes(x.data);
      })
      .catch((x) => {
        console.log(x);
      });
  }, []);

    

  return (
    <Provider store={store}>
      <Header />
      <Container>
        <h1>Clientes</h1>
        <div className="d-flex flex-column align-items-center gap-3">
          {clientes &&
            clientes.map((cliente) => (
              <CardCliente key={cliente.id} cliente={cliente}/>
            ))}
        </div>
      </Container>
    </Provider>
  );
}
