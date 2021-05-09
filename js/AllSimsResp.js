import Schema from "./Schema.js";
import AllSimsRespSchema from "../schema/AllSimsResp.json";

// Imports for side-effects
import User from "../js/AllSims.js"; 

export default class AllSimsResp extends Schema {
    static schema = AllSimsRespSchema;
}
Schema.RegisterSchema.call(AllSimsResp);