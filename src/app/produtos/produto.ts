import { Fabricante } from '../fabricantes/fabricante';

export class Produto {
    id: number;
    nome: string;
    descricao: string;
    estoque: number;
    categoria: string;
    marca: string;
    valorVenda: number;
    valorCusto: number;
    dataCadastro: string;
    idFabricante: number;
    fabricante: Fabricante;
}