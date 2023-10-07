import React, { useEffect, useState } from "react";
import { ClienteInput } from "@/app/data/models/cliente";
import Form from "react-bootstrap/esm/Form";

export default function FormCliente(props: any) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleClick = () => {
    const cliente: ClienteInput = {
      nome: nome,
      email: email,
      cpf: cpf,
    };
    props.handler(cliente).then(() => {
      alert("Cliente cadastrado com sucesso!");      
      window.location.href = "/clientes";
    }).catch((error: any)=> {
      console.log(error);
      setErrorMessage(error.message);
    })
  };
  useEffect(() => {
    if(props.method === "Editar")
    {
      setNome(props.cliente.nome);
      setEmail(props.cliente.email);
      setCpf(props.cliente.cpf);
    }
  } ,[])
  
  return (
    <div className="w-25">
      <Form>
        <Form.Group className="mb-3 d-flex flex-column gap-3 align-items-center">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="John Doe"
            value={nome}
            onChange={(x) => setNome(x.target.value)}
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="john@doecorp.com"
            value={email}
            onChange={(x) => setEmail(x.target.value)}
          />
          <Form.Label>CPF</Form.Label>
          <Form.Control
            type="text"
            placeholder="000.000.000-00"
            value={cpf}
            onChange={(x) => setCpf(x.target.value)}
          />
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <Form.Control
            className="w-50"
            type="button"
            value={props.method}
            onClick={(x) => handleClick()}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
