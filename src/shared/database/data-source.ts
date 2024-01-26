import { Account } from "src/shared/database/typeorm/Entities/account.entity";
import { DataSource, DataSourceOptions } from "typeorm";
import { Base } from "./typeorm/Entities/base.entity";
console.log(`${__dirname}/migrations/*.ts`);
export const dbDataSource: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    synchronize: false,
    migrations: [`${__dirname}/migrations/*.js`],
    entities: [Account],
  };
  
const dataSource = new DataSource(dbDataSource);
export default dataSource;