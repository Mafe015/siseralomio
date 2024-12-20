import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvedoresModule } from './provedores/provedores.module';
import { OrganosModule } from './organos/organos.module';
import { ClientesModule } from './clientes/clientes.module';
import {ServeStaticModule} from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest-goloso'),ProvedoresModule, OrganosModule, ClientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
