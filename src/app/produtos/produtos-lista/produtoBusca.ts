import { Fabricante } from 'src/app/fabricantes/fabricante';

export class ProdutoBusca{
    id: number;
    nome: string;
    descricao: string;
    dataCompra: string;
    estoque: number;
    valorVenda: number;
    valorCusto: number;
    origemProduto: string;
    dataCadastro: string;
    fabricante: Fabricante;
}