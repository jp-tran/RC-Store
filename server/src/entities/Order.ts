import { ObjectType, Field } from 'type-graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { PurchasedProduct } from './PurchasedProduct';

@ObjectType()
@Entity()
export class Order extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => [PurchasedProduct])
  @OneToMany(
    () => PurchasedProduct,
    (purchasedProduct) => purchasedProduct.order
  )
  purchasedProducts!: PurchasedProduct[];

  @Field()
  @Column()
  userID!: number;

  @Field()
  @Column()
  grandTotal!: number;

  @Field()
  @CreateDateColumn()
  date: Date;
}
