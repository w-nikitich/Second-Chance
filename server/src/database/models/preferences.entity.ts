import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Preferences extends Model {
  @Column
  name: string;
}
