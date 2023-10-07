'use client'
import Header from '@/app/Components/Header'
import { store } from '@/app/features/redux/store'
import { UUID } from 'crypto'
import React from 'react'
import { Provider } from 'react-redux'

export default function ProdutoDetails({params} : {params: {id: UUID}}) {
  return (
    <Provider store={store}>
        <Header/>
    </Provider>
)
}
