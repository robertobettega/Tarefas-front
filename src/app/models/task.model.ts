import { Situacao } from '../models/situacao.enum';

export class Task {
  id!: number;
  titulo: string = '';
  descricao: string = '';
  responsavel: string = '';
  situacao: Situacao = Situacao.PENDENTE;
  dataConclusao?: Date;
}
