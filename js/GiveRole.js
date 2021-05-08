import Schema from "./Schema.js";
import GiveRoleSchema from "../schema/GiveRole.json";

// Imports for side-effects
import User from "../js/User.js"; 

export default class GiveRole extends Schema {
    static schema = GiveRoleSchema;

    static Validate(schemaObject) {
    schemaObject = super.Validate(schemaObject);

    if ('responses' in schemaObject) {
        schemaObject.responses = Responses.Validate(schemaObject.responses);
    }
        return schemaObject;
    }
}
Schema.RegisterSchema.call(GiveRole);