import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1706274341207 implements MigrationInterface {
    name = 'Migration1706274341207'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" ALTER COLUMN "createdAt" SET DEFAULT '"2024-01-26T13:05:41.677Z"'`);
        await queryRunner.query(`ALTER TABLE "account" ALTER COLUMN "updatedAt" SET DEFAULT '"2024-01-26T13:05:41.678Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" ALTER COLUMN "updatedAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "account" ALTER COLUMN "createdAt" DROP DEFAULT`);
    }

}
