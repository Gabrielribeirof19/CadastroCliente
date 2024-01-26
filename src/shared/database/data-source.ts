
import { DataSource, DataSourceOptions } from "typeorm";
import { Account } from "./typeorm/Entities/account.entity";
console.log(`${__dirname}/migrations/*.ts`);
export const dbDataSource: DataSourceOptions = {
    type: 'postgres',
    host: 'db',
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