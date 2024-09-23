import { Module } from '@nestjs/common';
import { ProvedoresController } from './provedores.controller';
import { ProvedoresService } from './provedores.service';
import { ProveM, ProveSchema } from 'src/schemas/provedores.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

  imports: [
    MongooseModule.forFeature([{ name: ProveM.name, schema: ProveSchema }]),
  ],

  controllers: [ProvedoresController],
  providers: [ProvedoresService]
})
export class ProvedoresModule {}
