import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Characters extends Model {
  @Column
  name: string;

  @Column
  surname: string;

  @Column
  parents: [];

  @Column
  friends?: [];

  @Column
  siblings?: [];

  @Column
  partners?: [];

  @Column
  children?: [];

  @Column
  isMarried: boolean;

  @Column
  sex: string;

  @Column
  age: number;

  @Column
  isAlive: boolean;

  @Column
  money: number;

  @Column
  city: string;

  @Column
  IQ: number;

  @Column
  EQ: number;

  @Column
  moral: number;

  @Column
  health: number;

  @Column
  wealth: number;

  @Column
  occupationId?: number;

  @Column
  pastExperience?: object;

  @Column
  photo: string;

  @Column
  companyId?: number;

  @Column
  careerStageId?: number;
}
