import { Arg, Resolver, Query, InputType, Field, Mutation } from 'type-graphql';
import { Product } from '../entities/Product';

@InputType()
class NewProduct {
  @Field()
  name: string;

  @Field({ nullable: true, defaultValue: '' })
  description?: string;

  @Field({ nullable: true, defaultValue: '' })
  longDescription?: string;

  @Field()
  price: number;

  @Field({ nullable: true, defaultValue: 'USD' })
  currency?: string;

  @Field({ nullable: true, defaultValue: 1 })
  remainingQuantity?: number;

  @Field({ nullable: true, defaultValue: '' })
  image?: string;
}

@InputType()
class UpdatedProduct {
  @Field()
  sku: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  longDescription?: string;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  currency?: string;

  @Field({ nullable: true })
  remainingQuantity?: number;

  @Field({ nullable: true })
  image?: string;
}

@Resolver()
export class ProductResolver {
  @Query(() => [Product])
  products(): Promise<Product[]> {
    return Product.find();
  }

  @Query(() => Product)
  async product(
    @Arg('sku', () => String)
    sku: string
  ): Promise<Product | undefined> {
    return await Product.findOne(sku);
  }

  // need to check if user is authorized before creating
  @Mutation(() => Product)
  async createProduct(
    @Arg('newProduct') newProduct: NewProduct
  ): Promise<Product> {
    return Product.create({
      ...newProduct,
    }).save();
  }

  // need to check if request is authorized before updating product
  @Mutation(() => Product)
  async updateProduct(
    @Arg('updatedProduct') updatedProduct: UpdatedProduct
  ): Promise<Product | undefined> {
    await Product.update(updatedProduct.sku, updatedProduct);
    return await Product.findOne(updatedProduct.sku);
  }

  // need to check if request is authorized before deleting product
  @Mutation(() => Boolean)
  async deleteProduct(@Arg('sku', () => String) sku: string): Promise<boolean> {
    const deleteResult = await Product.delete({ sku });
    return deleteResult.affected != 0; // returns true if an item was deleted
  }
}
