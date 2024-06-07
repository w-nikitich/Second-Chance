import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Classes extends Model {
  @Column
  name: string;

  @Column
  description?: string;

  @Column
  effect: object;
}
