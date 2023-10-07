import { ComprarProdutoInput } from "@/app/data/models/loja";
import { Produto } from "@/app/data/models/produto";
import { comprarProduto } from "@/app/data/services/apiLoja";
import { RootState } from "@/app/features/redux/store";
import React, { useState } from "react";
import Form from "react-bootstrap/esm/Form";
import { useSelector } from "react-redux";

export default function FormComprar(props: { produto: Produto }) {
  const user = useSelector((state: RootState) => state.login.value);
  const [quantidade, setQuantidade] = useState<number>(0);
  const handleComprar = () => {
    console.log("Comprando");
    const input: ComprarProdutoInput = {
      clienteId: user.id,
      produtoId: props.produto.id,
      quantidade: quantidade,
    };
    comprarProduto(input).then((x) => {
      console.log(x.data);
      window.location.href = `/clientes/${user.id}`;
    });
  };
  return (
    <>
      <Form>
        <Form.Control
          type="number"
          value={quantidade}
          onChange={(x) => setQuantidade(parseInt(x.target.value))}
        />
        <Form.Control type="button" value="Comprar" onClick={handleComprar} />
      </Form>
    </>
  );
}
