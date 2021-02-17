import { ObjectType, Field } from 'type-graphql';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@ObjectType()
@Entity()
export class Product extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  sku!: string;

  @Column({ length: 100 })
  name!: string;

  @Column()
  description: string;

  @Column()
  longDescription: string;

  @Column()
  price!: number;

  @Column()
  currency!: string;

  @Column()
  remainingQuantity: number;

  @Column()
  image: string;

  @Column()
  seller: number; // need to check this

  @Column()
  datePosted: Date;

  // column for categories that item belongs to?
}
