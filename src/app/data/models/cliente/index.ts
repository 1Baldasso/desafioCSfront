import { UUID } from "crypto";

export type Cliente = {
    id: UUID;
    nome: string;
    email: string;
    cpf: string;
    saldo: number;
}

export type ClienteInput = {
    nome: string;
    email: string;
    cpf: string;
}

export type ClienteUpdate = {
    nome?: string;
    email?: string;
    cpf?: string;
}