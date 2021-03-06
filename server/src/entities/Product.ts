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
export class Product extends BaseEntity {
  @Field() // exposes this column to the graphql schema
  @PrimaryGeneratedColumn('uuid')
  sku!: string;

  @Field()
  @Column({ length: 100 })
  name!: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  longDescription: string;

  @Field()
  @Column()
  price!: number;

  @Field()
  @Column()
  currency!: string;

  @Field()
  @Column({ default: 'NA' })
  size!: string;

  @Field()
  @Column()
  remainingQuantity: number;

  @Field()
  @Column()
  image: string;

  @Field()
  @CreateDateColumn()
  datePosted: Date;

  // column for categories that item belongs to?
}
