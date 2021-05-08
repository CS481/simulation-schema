import Schema from "./Schema.js";
import AllSimsSchema from "../schema/AllSims.json";

// Imports for side-effects
import User from "../js/AllSims.js"; 

export default class AllSims extends Schema {
    static schema = AllSimsSchema;
}
Schema.RegisterSchema.call(AllSims);