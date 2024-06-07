import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Logs extends Model {
  @Column
  text: string;

  @Column
  chance: number;

  @Column
  requirements?: object;
}
