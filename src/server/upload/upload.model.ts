import { DataTypes } from 'sequelize';
import {
  AutoIncrement,
  Column,
  CreatedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'uploads',
  timestamps: true,
})
export class UploadModel extends Model {
  @CreatedAt
    creationDate!: Date;

  @UpdatedAt
    updatedOn!: Date;

  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataTypes.INTEGER, allowNull: false })
    id!: number;

  @Column({ type: DataTypes.INTEGER, allowNull: false })
    numberOfEntries!: number;
}
