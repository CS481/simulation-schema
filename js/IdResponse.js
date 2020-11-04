import Schema from "./Schema";
import IdResponseSchema from "../schema/IdResponse.json";

export default class IdResponse extends Schema {
    static schema = IdResponseSchema;
}
Schema.RegisterSchema.call(IdResponse);