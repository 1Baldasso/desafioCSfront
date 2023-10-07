import { Cliente } from "@/app/data/models/cliente";
import { deleteCliente } from "@/app/data/services/apiCliente";
import React from "react";
import Card from "react-bootstrap/esm/Card";
import { useDispatch } from "react-redux";
import { login } from "@/app/features/redux/login/reducer";
import { useEffect } from "react";

export default function CardClienteDetails(
  props: { cliente: Cliente },
  ...rest: any[]
) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(login(props.cliente));
    }, []);
  const handleDelete = () => {
    console.log("deletando");
    deleteCliente(props.cliente.id).then((x) => {
      console.log(x);
      window.location.href = "/clientes";
    });
  };
  return (
    <>
      <Card className="w-25">
        <Card.Header>
          <Card.Title>{props.cliente.nome}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>{props.cliente.email}</Card.Text>
          <Card.Text>{props.cliente.cpf}</Card.Text>
          <Card.Text>{props.cliente.saldo}</Card.Text>
          <Card.Link href={`/clientes/saldo/carregar/${props.cliente.id}`}>
            Carregar
          </Card.Link>
        </Card.Body>
        <Card.Footer>
          <Card.Link href={`/clientes/${props.cliente.id}/editar/`}>
            Editar
          </Card.Link>
          <Card.Link onClick={handleDelete}>Excluir</Card.Link>
        </Card.Footer>
      </Card>
    </>
  );
}
