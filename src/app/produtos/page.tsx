'use client'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../features/redux/store'
import { Container, PopoverBody } from 'react-bootstrap'
import { Produto } from '../data/models/produto'
import { getProdutos } from '../data/services/apiProduto'
import CardProduto from '../Components/CardProduto'
import { UUID } from 'crypto'
import Header from '../Components/Header'

export default function ProdutoList() {

    const [produtos, setProdutos] = useState<Produto[]>([] as Produto[])
    useEffect(() => {
        getProdutos().then((x) => {
            console.log(x.data)
            setProdutos(x.data)
        })
        .catch((x) => {
            console.log(x)
        })
    }, [])
  return (
    <>
        <Provider store={store}>
            <Header/>
            <Container className="d-flex flex-column align-items-center gap-3 w-50">
                <h2>Produtos</h2>
                {produtos && produtos.map (produto => (
                    <CardProduto key={produto.id} produto={produto}/>
                ))}  
            </Container>
        </Provider>
    </>
  )
}
