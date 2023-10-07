import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/esm/Form";
import { ProdutoInput } from "@/app/data/models/produto";

export default function FormProduto(props: {method: string, handler: any, produto?: ProdutoInput}) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const handleClick = () => {
    const produto: ProdutoInput = {
      nome: nome,
      descricao: descricao,
      preco: preco,
    };
    props.handler(produto).then(() => {
      alert(`Produto ${props.method.toLowerCase()}ado com sucesso!`);      
      window.location.href = "/produtos";
    }).catch((error: any)=> {
      console.log(error);
      setErrorMessage(error.message);
    })
  };
  useEffect(() => {
    if(props.method === "Edit")
    {
      setNome(props.produto?.nome ?? "");
      setDescricao(props.produto?.descricao ?? "");
      setPreco(props.produto?.preco ?? 0);
    }
  } ,[])
  
  return (
    <div className="w-25">
      <Form>
        <Form.Group className="mb-3 d-flex flex-column gap-3 align-items-center">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome do Produto"
            value={nome}
            onChange={(x) => setNome(x.target.value)}
          />
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descrição curta do produto"
            value={descricao}
            onChange={(x) => setDescricao(x.target.value)}
          />
          <Form.Label>Valor</Form.Label>
          <Form.Control
            type="number"
            placeholder="R$ 00.00"
            step=".01"
            value={preco}
            onChange={(x) => setPreco(parseInt(x.target.value))}
          />
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <Form.Control
            className="w-50"
            type="button"
            value={`${props.method}ar`}
            onClick={(x) => handleClick()}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
