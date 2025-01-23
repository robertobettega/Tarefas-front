import { Situacao } from '../models/situacao.enum';
import { prioridade } from './prioridade.enum';

export class Task {
  id!: number;
  titulo: string = '';
  descricao: string = '';
  responsavel: string = '';
  situacao: Situacao = Situacao.EM_ANDAMENTO;
  prioridade: prioridade = prioridade.MEDIA;
  dataConclusao?: Date
}
