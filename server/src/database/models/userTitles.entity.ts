import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class UserTitles extends Model {
  @Column
  userId: number;

  @Column
  titleId?: number;
}
