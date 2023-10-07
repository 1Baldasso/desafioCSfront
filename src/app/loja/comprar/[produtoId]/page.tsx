'use client'
import FormComprar from '@/app/Components/FormComprar'
import Header from '@/app/Components/Header'
import { Produto } from '@/app/data/models/produto'
import { getProduto } from '@/app/data/services/apiProduto'
import { store } from '@/app/features/redux/store'
import { UUID } from 'crypto'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Provider } from 'react-redux'

export default function ComprarProduto({params} : {params: {produtoId: UUID}}) {
    const [produto, setProduto] = useState<Produto>({} as Produto)
    const [quantidade, setQuantidade] = useState<number>(0)
    useEffect(() => {
        getProduto(params.produtoId).then((x) => {
            console.log(x.data)
            setProduto(x.data)
        })
    }, [])
    
    return (
        <Provider store={store}>
            <Header/>
            <Container className="d-flex flex-column align-items-center">
                <h2>Comprar Produto</h2>
                <h3>{produto.nome}</h3>
                {produto.id && <FormComprar produto={produto}/>}
            </Container>
        </Provider>
  )
}
