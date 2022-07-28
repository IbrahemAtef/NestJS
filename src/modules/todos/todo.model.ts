import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../users/user.model';

@Table({
  tableName: 'todos',
  underscored: true
})
export class Todo extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    @Column(DataType.STRING)
    title: string;

    @Column(DataType.STRING)
    description: string;

    @Column({ defaultValue: false, type:DataType.BOOLEAN})
    status: boolean;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    userId: number;

    @BelongsTo(() => User)
    user: User;
}
