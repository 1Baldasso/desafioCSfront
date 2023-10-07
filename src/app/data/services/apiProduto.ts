import { api } from "@/app/features/axios";
import { Produto, ProdutoInput } from "@/app/data/models/produto";
import { UUID } from "crypto";

export async function getProdutos() {
    return await api.get<Produto[]>('/produtos');
}

export async function getProduto(id: UUID) {
    return await api.get<Produto>(`/produtos/${id}`);
}

export async function createProduto(produto: ProdutoInput) {
    return await api.post<Produto>('/produtos', produto);
}

export async function updateProduto(id: UUID, produto: ProdutoInput) {
    return await api.put<Produto>(`produtos/${id.toString()}`, produto,
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
          }
    });
}

export async function deleteProduto(id: UUID) {
    return await api.delete<Produto>(`/produtos/${id}`);
}