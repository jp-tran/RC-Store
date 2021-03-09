import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1615268096999 implements MigrationInterface {
    name = 'Initialize1615268096999'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "listing" ("sku" uuid NOT NULL DEFAULT gen_random_uuid(), "name" character varying(100) NOT NULL, "description" character varying NOT NULL DEFAULT '', "price" integer NOT NULL, "currency" character varying NOT NULL, "remainingQuantity" integer NOT NULL DEFAULT '1', "image" character varying NOT NULL DEFAULT '', "sellerID" integer NOT NULL, "sellerName" character varying NOT NULL, "sellerPhoto" character varying NOT NULL, "condition" character varying NOT NULL DEFAULT '', "location" character varying NOT NULL DEFAULT '', "datePosted" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a80372eec343cd1d43989eeeb04" PRIMARY KEY ("sku"))`);
        await queryRunner.query(`CREATE TABLE "purchased_product" ("id" SERIAL NOT NULL, "sku" character varying NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, "currency" character varying NOT NULL, "size" character varying NOT NULL, "quantity" integer NOT NULL, "image" character varying NOT NULL DEFAULT '', "orderId" integer, CONSTRAINT "PK_013d887dc9a41848855700d007e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" SERIAL NOT NULL, "userID" integer NOT NULL, "grandTotal" integer NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("sku" uuid NOT NULL DEFAULT gen_random_uuid(), "name" character varying(100) NOT NULL, "description" character varying NOT NULL, "longDescription" character varying NOT NULL, "price" integer NOT NULL, "currency" character varying NOT NULL, "size" character varying NOT NULL DEFAULT 'NA', "remainingQuantity" integer NOT NULL, "image" character varying NOT NULL, "datePosted" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_34f6ca1cd897cc926bdcca1ca39" PRIMARY KEY ("sku"))`);
        await queryRunner.query(`ALTER TABLE "purchased_product" ADD CONSTRAINT "FK_028d84a6c272666e8cdcf9c596c" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purchased_product" DROP CONSTRAINT "FK_028d84a6c272666e8cdcf9c596c"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "purchased_product"`);
        await queryRunner.query(`DROP TABLE "listing"`);
    }

}
