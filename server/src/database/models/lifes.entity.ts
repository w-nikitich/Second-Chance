import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Lifes extends Model {
  @Column
  userId: number;

  @Column
  characterId: number;
}
