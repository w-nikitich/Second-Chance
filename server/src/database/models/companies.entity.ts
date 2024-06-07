import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Preferences extends Model {
  @Column
  name: string;

  @Column
  requirements?: object;

  @Column
  payment: object;
}
