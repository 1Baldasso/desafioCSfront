'use client'
import FormProduto from '@/app/Components/FormProduto'
import Header from '@/app/Components/Header'
import { Produto, ProdutoInput } from '@/app/data/models/produto'
import { getProduto, updateProduto } from '@/app/data/services/apiProduto'
import { store } from '@/app/features/redux/store'
import { UUID } from 'crypto'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Provider } from 'react-redux'

export default function EditarProduto({params} : {params: {id: UUID}}) {
  const [produto, setProduto] = useState<Produto>({nome:"", descricao:"", preco:0 } as Produto)
  useEffect(() => {
    console.log("hi")
    getProduto(params.id).then((x) => {
      console.log(x.data)
      setProduto(x.data)
    })
  }, [])
  const updateHandler = (pr: ProdutoInput) => {
    return updateProduto(produto.id, pr)
  }
  return (
    <Provider store={store}>
        <Header/>
        <Container className="d-flex flex-column align-items-center">
        {produto.id && <FormProduto produto={produto} handler={updateHandler} method="Edit"/>}
        </Container>
    </Provider>
)}
