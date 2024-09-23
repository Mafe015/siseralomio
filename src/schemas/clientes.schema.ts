import { Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import { Types } from "mongoose";



@Schema()
export class ClienM{
    @Prop({
        require: true
    })
    name: string;

    @Prop({
        require: true
    })
    pais:string;

    @Prop({
        require: true
    })
    ciudad:string;

    @Prop({
        require: true
    })
    edad:number;

}

export const ClienSchema = SchemaFactory.createForClass(ClienM);