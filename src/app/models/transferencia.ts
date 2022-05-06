import { Time } from "@angular/common";

export interface Transferencia {
  id?: string;
  valor: number;
  destino: number | string;
  data?: Date;
  hora: Time;
}
