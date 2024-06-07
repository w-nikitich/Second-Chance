import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Titles extends Model {
  @Column
  name: string;

  @Column
  picture?: string;
}
