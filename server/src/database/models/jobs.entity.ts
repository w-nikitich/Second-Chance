import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Jobs extends Model {
  @Column
  name: string;

  @Column
  stages: [];

  @Column
  requirements?: object;
}
