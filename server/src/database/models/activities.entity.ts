import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Activities extends Model {
  @Column
  name: string;

  @Column
  price?: number;

  @Column
  placeId?: number;

  @Column
  description?: string;
}
