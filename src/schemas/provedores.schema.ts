import { SchemaFactory,Schema,Prop } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()
export class ProveM{
    @Prop({
        required: true
    })
    nombre:string;

    @Prop({
        required: true
    })
    ciudad:string;

    @Prop({
        required: true
    })
    pais:string;

    @Prop([{ type: Types.ObjectId, ref: 'organM' }]) 
    organos: Types.ObjectId[];

}
export const ProveSchema = SchemaFactory.createForClass(ProveM);