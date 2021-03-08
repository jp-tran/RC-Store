import { ObjectType, Field } from 'type-graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { Order } from './Order';

@ObjectType()
@Entity()
export class PurchasedProduct extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Order, (order) => order.purchasedProducts)
  order!: Order;

  @Field()
  @Column()
  sku!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  price!: number;

  @Field()
  @Column()
  currency!: string;

  @Field()
  @Column()
  size!: string;

  @Field()
  @Column()
  quantity!: number;

  @Field()
  @Column({ default: '' })
  image!: string;
}
