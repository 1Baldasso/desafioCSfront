"use client";
import React, { useEffect, useState } from "react";
import Header from "@/app/Components/Header";
import { store } from "@/app/features/redux/store";
import { Provider } from "react-redux";
import Form from "react-bootstrap/esm/Form";
import { Container, FormGroup } from "react-bootstrap";
import { UUID } from "crypto";
import { Cliente } from "@/app/data/models/cliente";
import { getCliente } from "@/app/data/services/apiCliente";
import { carregarSaldo } from "@/app/data/services/apiLoja";
import { CarregarSaldoInput } from "@/app/data/models/loja";

export default function CarregarSaldo({ params }: { params: { id: UUID } }) {
  const [cliente, setCliente] = useState<Cliente>({} as Cliente);
  const [valor, setValor] = useState<number>(0);
//   let valor = 0
  useEffect(() => {
    getCliente(params.id)
      .then((x) => {
        console.log(x.data);
        setCliente(x.data);
      })
      .catch((x) => {
        console.log(x);
      });
  }, []);

  const handleCarregar = () => {
    console.log(valor);
    const input: CarregarSaldoInput = {
      idCliente: cliente.id,
      valor: valor,
    };
    carregarSaldo(input).then((x) => {
      console.log(x.data);
      window.location.href = `/clientes/${cliente.id}`;
    });
  };

  return (
    <Provider store={store}>
      <Header />
      <Container className="d-flex flex-column align-items-center">
        <Form>
          <Form.Text>{cliente.nome}</Form.Text>
          <FormGroup className="d-flex flex-column gap-3 align-items-center">
            <Form.Label>Valor</Form.Label>
            <Form.Control
              type="number"
              className="w-50"
              value={valor}
              onChange={(x) => setValor(parseInt(x.target.value))}
            />
            <Form.Control
              type="button"
              value="Carregar"
              className="w-50"
              onClick={handleCarregar}
            />
          </FormGroup>
        </Form>
      </Container>
    </Provider>
  );
}
