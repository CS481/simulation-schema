import Schema from "./Schema";
import IdRequestSchema from "../schema/IdRequest.json";

// Imports for side-effects
import User from "../js/User"; 

export default class IdRequest extends Schema {
    static schema = IdRequestSchema;
}
Schema.RegisterSchema.call(IdRequest);