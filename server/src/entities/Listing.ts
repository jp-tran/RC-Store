import { ObjectType, Field } from 'type-graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Listing extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  sku!: string;

  @Field()
  @Column({ length: 100 })
  name!: string;

  @Field()
  @Column({ default: '' })
  description: string;

  @Field()
  @Column()
  price!: number;

  @Field()
  @Column()
  currency!: string;

  @Field()
  @Column({ default: 1 })
  remainingQuantity: number;

  @Field()
  @Column({ default: '' })
  image: string;

  @Field()
  @Column()
  sellerID!: number;

  @Field()
  @Column()
  sellerName!: string;

  @Field()
  @Column()
  sellerPhoto!: string;

  @Field()
  @Column({ default: '' })
  condition: string;

  @Field()
  @Column({ default: '' })
  location: string;

  @Field()
  @CreateDateColumn()
  datePosted: Date;
}
