import React, { useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { RootState } from "@/app/features/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { login } from "@/app/features/redux/login/reducer";
import { getCliente } from "@/app/data/services/apiCliente";

export default function Header() {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');
  const user = useSelector((state: RootState) => state.login.value);
  const dispatch = useDispatch();
  const parseUUID = (uuid: string) => {
    return uuid as UUID;
  }
  useEffect(() => {
    if(!user.nome && userId)
    {
      getCliente(parseUUID(userId)).then((x) => {
        dispatch(login(x.data));
      })
    }
  }, [userId])
  return (
    <>
      <Navbar expand="sm" className="bg-secondary mb-3" fixed="top">
        <Container>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar" className="d-flex flex-row gap-5">
            <Navbar.Brand>Lucas Baldasso</Navbar.Brand>
            <NavDropdown title="Clientes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/clientes">Login</NavDropdown.Item>
              <NavDropdown.Item href="/clientes/novo">Novo</NavDropdown.Item>
              <NavDropdown.Item 
              href={`/clientes/saldo/carregar/${user.id}`}
              disabled={!user.nome ? true : false}
              >
                Carregar Saldo
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Produtos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/produtos/novo">Novo</NavDropdown.Item>
              <NavDropdown.Item href={`/produtos?userId=${user.id}`} disabled={!user.nome ? true : false}>Todos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Loja" id="basic-nav-dropdown">
              <NavDropdown.Item href="/loja/relatorio">
                Relatório
              </NavDropdown.Item>
            </NavDropdown>
            {user.nome && (
              <>
                <Navbar.Text>
                  <h4>{user.nome}</h4>
                </Navbar.Text>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
