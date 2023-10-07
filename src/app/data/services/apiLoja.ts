import { api } from "@/app/features/axios";
import { 
    CarregarSaldoInput,
    ComprarProdutoInput,
    HistoricoCompra 
} from "../models/loja";

export async function comprarProduto(req : ComprarProdutoInput) {
    return await api.post(`/loja/produtos/comprar`, req);
}

export async function carregarSaldo(req : CarregarSaldoInput) {
    return await api.put('/loja/carregar-saldo', req);
}

export async function relatorioCompras()
{
    return await api.get<HistoricoCompra[]>('/loja/historico');
}