import { Module } from '@nestjs/common';
import { OrganosController } from './organos.controller';
import { OrganosService } from './organos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganM, OrganSchema } from 'src/schemas/organos.schema';

@Module({
  imports:[MongooseModule.forFeature(
    [{name:OrganM.name,
      schema :OrganSchema}])],
  controllers: [OrganosController],
  providers: [OrganosService]
})
export class OrganosModule {}
