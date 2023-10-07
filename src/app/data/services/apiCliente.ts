import { api } from "@/app/features/axios";
import { Cliente, ClienteInput } from "@/app/data/models/cliente";
import { UUID } from "crypto";

export async function getClientes() {
    return await api.get<Cliente[]>('/clientes');
}

export async function getCliente(id: UUID) {
    return await api.get<Cliente>(`/clientes/${id}`);
}

export async function createCliente(cliente: ClienteInput) {
    return await api.post<Cliente>('/clientes', cliente);
}

export async function updateCliente(id: UUID, cliente: ClienteInput) {
    return await api.put<Cliente>(`/clientes/${id}`, cliente);
}

export async function deleteCliente(id: UUID) {
    return await api.delete<Cliente>(`/clientes/${id}`);
}