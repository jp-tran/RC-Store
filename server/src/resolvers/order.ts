import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { Order } from '../entities/Order';
import { PurchasedProduct } from '../entities/PurchasedProduct';

@InputType()
class NewlyPurchasedProduct {
  @Field()
  sku: string;

  @Field()
  name: string;

  @Field()
  price: number;

  @Field({ nullable: true, defaultValue: 'USD' })
  currency?: string;

  @Field({ nullable: true, defaultValue: 'NA' })
  size?: string;

  @Field()
  quantity: number;
}

@InputType()
class NewOrder {
  @Field(() => [NewlyPurchasedProduct])
  purchasedProducts: NewlyPurchasedProduct[];

  @Field()
  userID: number;

  @Field()
  grandTotal: number;
}

@Resolver()
export class OrderResolver {
  @Query(() => [Order])
  async orders(
    @Arg('userID', () => Number)
    userID: number
  ): Promise<Order[]> {
    return Order.find({ where: { userID }, relations: ['purchasedProducts'] });
  }

  @Mutation(() => Order)
  async createOrder(@Arg('newOrder') newOrder: NewOrder): Promise<Order> {
    const purchasedProducts: PurchasedProduct[] = [];

    // create table rows for newly purchased products
    for (const product of newOrder.purchasedProducts) {
      const savedProduct = await PurchasedProduct.create({ ...product }).save();
      purchasedProducts.push(savedProduct);
    }

    // create table row for new order, then update purchased products table with order ID
    const order = new Order();
    order.userID = newOrder.userID;
    order.grandTotal = newOrder.grandTotal;
    order.purchasedProducts = purchasedProducts;
    return await Order.save(order);
  }
}
