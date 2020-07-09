import { createConnection } from 'typeorm';

createConnection().then(() => console.log('🔥 database connection '));