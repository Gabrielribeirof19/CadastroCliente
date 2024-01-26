import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { resolve } from "path";
import { Account } from "src/shared/database/typeorm/Entities/account.entity";
import { Base } from "./typeorm/Entities/base.entity";

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        synchronize: false,
        migrations: [`${__dirname}/migrations/*.js`],
        entities: [Account],
      }),
    ],
    exports: [],
})
export class DatabaseModule {}
