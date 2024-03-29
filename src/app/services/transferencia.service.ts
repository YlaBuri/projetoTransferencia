import { Injectable } from '@angular/core';
import { Transferencia } from '../models/transferencia';
@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: Transferencia[];
  Transfere
  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);

    this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
