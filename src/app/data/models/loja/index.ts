import { UUID } from "crypto";

export type ComprarProdutoInput = {
    produtoId: UUID,
    clienteId: UUID,
    quantidade: number
}

export type CarregarSaldoInput = {
    idCliente: UUID,
    valor: number
}

export type HistoricoCompra = {
    id: UUID,
    nomeCliente: string,
    nomeProduto: string,
    quantidade: number,
    valor: number,
    valorTotal: number,
}