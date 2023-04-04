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
  tableName: 'leads',
  timestamps: true,
})
export class LeadModel extends Model {
  @CreatedAt
    creationDate!: Date;

  @UpdatedAt
    updatedOn!: Date;

  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataTypes.INTEGER, allowNull: false })
    id!: number;

  @Column({ type: DataTypes.TEXT, allowNull: false })
    firstName!: string;

  @Column({ type: DataTypes.TEXT, allowNull: false })
    lastName!: string;

  @Column({ type: DataTypes.TEXT, allowNull: false, unique: true })
    phone!: string;


  @Column({ type: DataTypes.TEXT, allowNull: false, unique: true })
    email!: string;

  @Column({ type: DataTypes.INTEGER })
    uploadId!: number;
}
