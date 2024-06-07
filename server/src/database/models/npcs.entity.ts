import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class NPCs extends Model {
  @Column
  name: string;

  @Column
  surname: string;

  @Column
  sex: string;

  @Column
  age: number;

  @Column
  isAlive: boolean;

  @Column
  city: string;

  @Column
  preferences: [];

  @Column
  IQ: number;

  @Column
  EQ: number;

  @Column
  moral: number;

  @Column
  health: number;

  @Column
  wealth: number;

  @Column
  occupationId?: number;

  @Column
  photo: string;
}
