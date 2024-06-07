import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Universities extends Model {
  @Column
  name: string;

  @Column
  annualPrice: number;

  @Column
  monthlyPrice: number;

  @Column
  description?: string;

  @Column
  qualificationId: number;

  @Column
  years: number;

  @Column
  degree: string;

  @Column
  effect: object;
}
