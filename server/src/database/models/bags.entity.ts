import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Bags extends Model {
  @Column
  userId: number;

  @Column
  itemId?: number;
}
