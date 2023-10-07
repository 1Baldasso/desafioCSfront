import { UUID } from "crypto"

export type Produto = {
    id: UUID,
    nome: string,
    preco: number,
    descricao: string
}

export type ProdutoInput = {
    nome: string,
    preco: number,
    descricao: string
}