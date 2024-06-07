import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Qualifications extends Model {
  @Column
  name: string;
}
