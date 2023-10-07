import React from 'react'

import { Cliente } from '@/app/data/models/cliente';

import Card from 'react-bootstrap/esm/Card';
import Container from 'react-bootstrap/esm/Container';

import { useDispatch } from 'react-redux';
import { login } from '@/app/features/redux/login/reducer';

export default function CardCliente(props: { cliente: Cliente; }) {
    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(login(props.cliente));
    };
    return (
        <Card key={props.cliente.id} className="w-25">
        <Card.Header>
          <Card.Title>{props.cliente.nome}</Card.Title>
          <Card.Subtitle>{props.cliente.email}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <p>{props.cliente.cpf}</p>
          <p>{props.cliente.saldo}</p>
        </Card.Body>
        <Card.Footer className="d-flex flex-row">
          <Container>
            <Card.Link href={`/clientes/${props.cliente.id}`}>Ver</Card.Link>
            <Card.Link href={`/clientes/${props.cliente.id}/editar`}>
              Editar
            </Card.Link>
            <Card.Link onClick={handleLogin}>
              Logar
            </Card.Link>
          </Container>
        </Card.Footer>
      </Card>
  )
}
