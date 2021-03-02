import { Arg, Resolver, Query, InputType, Field, Mutation } from 'type-graphql';
import { Listing } from '../entities/Listing';

@InputType()
class NewListing {
  @Field()
  name: string;

  @Field({ nullable: true, defaultValue: '' })
  description?: string;

  @Field()
  price: number;

  @Field({ nullable: true, defaultValue: 'USD' })
  currency?: string;

  @Field({ nullable: true, defaultValue: 1 })
  remainingQuantity?: number;

  @Field({ nullable: true, defaultValue: '' })
  image?: string;

  @Field()
  sellerID: number;

  @Field()
  sellerName: string;

  @Field()
  sellerPhoto: string;

  @Field()
  condition: string;

  @Field()
  location: string;
}

@InputType()
class UpdatedListing {
  @Field()
  sku: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  currency?: string;

  @Field({ nullable: true })
  remainingQuantity?: number;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  sellerID: number;

  @Field({ nullable: true })
  sellerName: string;

  @Field({ nullable: true })
  sellerPhoto: string;

  @Field({ nullable: true })
  condition?: string;

  @Field({ nullable: true })
  location?: string;
}

@Resolver()
export class ListingResolver {
  @Query(() => [Listing])
  listings(
    @Arg('sellerID', () => Number, { nullable: true })
    sellerID?: number
  ): Promise<Listing[]> {
    let searchQueries: any = {};

    if (sellerID != undefined) {
      searchQueries.sellerID = sellerID;
    }

    return Listing.find({ where: searchQueries });
  }

  @Query(() => Listing)
  async listing(
    @Arg('sku', () => String)
    sku: string
  ): Promise<Listing | undefined> {
    return await Listing.findOne(sku);
  }

  // need to check if user is authorized before creating
  @Mutation(() => Listing)
  async createListing(
    @Arg('newListing') newListing: NewListing
  ): Promise<Listing> {
    return Listing.create({
      ...newListing,
    }).save();
  }

  // need to check if request is authorized before updating listing
  @Mutation(() => Listing)
  async updateListing(
    @Arg('updatedListing') updatedListing: UpdatedListing
  ): Promise<Listing | undefined> {
    await Listing.update(updatedListing.sku, updatedListing);
    return await Listing.findOne(updatedListing.sku);
  }

  // need to check if request is authorized before deleting listing
  @Mutation(() => Boolean)
  async deleteListing(@Arg('sku', () => String) sku: string): Promise<boolean> {
    const deleteResult = await Listing.delete({ sku });
    return deleteResult.affected != 0; // returns true if a listing was deleted
  }
}
