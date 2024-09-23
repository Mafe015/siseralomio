import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { ClienM,ClienSchema } from 'src/schemas/clientes.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature(
    [{name:ClienM.name,
      schema : ClienSchema}])],
  controllers: [ClientesController],
  providers: [ClientesService]
})
export class ClientesModule {}
