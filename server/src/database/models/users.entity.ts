import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Users extends Model {
  @Column
  nickname: string;

  @Column
  deviceId: string;

  @Column
  password?: string;

  @Column
  usedTitleId?: number;
}
