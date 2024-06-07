import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Items extends Model {
  @Column
  name: string;

  @Column
  price?: number;

  @Column
  placeId?: number;

  @Column
  description?: string;

  @Column
  effect?: object;
}
