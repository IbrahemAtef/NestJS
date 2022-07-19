import { Table, Column, DataType, Model } from 'sequelize-typescript';
import {GenderEnum} from '../../common/enums/gender.enum'

const tableOption = {
  tableName: 'users',
  timestamps: false,
};

@Table(tableOption)

export class User extends Model{
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  password: string;

  @Column(DataType.ENUM(...Object.values(GenderEnum)))
  gender: string;
}
