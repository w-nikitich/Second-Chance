import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Quests extends Model {
  @Column
  description: string;

  @Column
  counterName: string;

  @Column
  counterValue: number;

  @Column
  userId?: number;
}
