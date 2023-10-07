'use client'
import CardVenda from '@/app/Components/CardVenda'
import Header from '@/app/Components/Header'
import { HistoricoCompra } from '@/app/data/models/loja'
import { relatorioCompras } from '@/app/data/services/apiLoja'
import { store } from '@/app/features/redux/store'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Provider } from 'react-redux'

export default function RelatorioVendas() {
    const [vendas, setVendas] = useState<HistoricoCompra[]>([] as HistoricoCompra[])
    useEffect(() => {
        relatorioCompras().then((x) => {
            console.log(x.data)
            setVendas(x.data)
        })
        .catch((x) => {
            console.log(x)
        })
    }, [])
    return (
    <Provider store={store}>
        <Header/>
        <Container className="d-flex flex-column align-items-center gap-3 w-50">
            <h1>Relatório de Vendas</h1>
            {vendas && vendas.map(venda =>(
                <CardVenda key={venda.id} venda={venda}/>
            ))}
        </Container>
    </Provider>
  )
}
