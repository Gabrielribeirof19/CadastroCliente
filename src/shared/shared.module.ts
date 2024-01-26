import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Account } from "./database/typeorm/Entities/account.entity";

import { DatabaseModule } from "./database/database.module";

@Module({
    imports: [TypeOrmModule.forFeature([Account])
    , DatabaseModule],
    exports: [TypeOrmModule],
})
export class SharedModule {}