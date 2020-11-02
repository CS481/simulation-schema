import Schema from "../js/Schema";
import StateSchema from "../schema/State.json";

// Schema that represents the simulation's state
export default class State extends Schema {
    static schema = StateSchema;

    // TODO: If user_waiting == false, add the other properties to the required array, and re-validate
    static FromJSON(json) {
        return Schema.FromJSON.call(this, json);
    }
}
Schema.RegisterSchema.call(State);