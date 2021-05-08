import Schema from "./Schema.js";
import GiveRoleSchema from "../schema/GiveRole.json";

// Imports for side-effects
import User from "../js/User.js"; 

export default class GiveRole extends Schema {
    static schema = GiveRoleSchema;
}
Schema.RegisterSchema.call(GiveRole);