import { Table,Column,DataType, Model } from "sequelize-typescript";
import { IProductDetails } from "../interface/product.interface";

@Table({
    tableName: 'product_details',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})
export default class ProductDetails extends Model<IProductDetails> implements IProductDetails {

    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id?: number;

    @Column({ type: DataType.STRING, allowNull: false })
    name!: string;

    @Column({ type: DataType.STRING, allowNull: true })
    description?: string;

    @Column({ type: DataType.DATE, allowNull: false })
    mfgDate!: Date;

    @Column({ type: DataType.DATE, allowNull: false })
    expiryDate!: Date;

    @Column({ type: DataType.INTEGER, allowNull: false })
    quantity!: number;

    @Column({ type: DataType.FLOAT, allowNull: false })
    price!: number;

    @Column({ type: DataType.STRING, allowNull: true })
    image_url!: string;
}