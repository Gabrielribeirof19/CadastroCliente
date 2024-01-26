import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1706272682176 implements MigrationInterface {
    name = 'Migration1706272682176'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "account" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL , "updatedAt" TIMESTAMP NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "name" character varying NOT NULL, "cpf" character varying NOT NULL, "dateOfBirth" character varying NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "account"`);
    }

}
