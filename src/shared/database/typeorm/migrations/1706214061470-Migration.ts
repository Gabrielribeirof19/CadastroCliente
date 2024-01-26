import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1706214061470 implements MigrationInterface {
    name = 'Migration1706214061470'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "account" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "cpf" character varying NOT NULL, "dateOfBirth" TIMESTAMP NOT NULL, CONSTRAINT "UQ_050bd85c0297a4f44ce2c64a27b" UNIQUE ("cpf"), CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "account"`);
    }

}
