import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Places extends Model {
  @Column
  name: string;

  @Column
  requirements?: object;

  @Column
  price?: number;
}
