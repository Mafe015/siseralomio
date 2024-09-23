import { SchemaFactory,Schema,Prop } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()

export class OrganM{
    @Prop({
        required: true
    })
    name: string
    @Prop({
        required: true
    })
    tipo: string;
    @Prop({
        required: true
    })
    descripcion: string;

    @Prop({
        default: false
    })
    qualityVerified: boolean;

    @Prop({
        required: true
    })
    calidad:string;

    @Prop({
        required: true
    })
    precio: number;

   @Prop({ type: Types.ObjectId, ref: 'ProvM' }) 
    provedor: Types.ObjectId;
}
export const OrganSchema = SchemaFactory.createForClass(OrganM);