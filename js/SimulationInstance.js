import Schema from "../js/Schema";
import SimulationInstanceSchema from "../schema/SimulationInstance.json";

// Imports for side-effects
import User from "../js/User"; 

export default class SimulationInstance extends Schema {
    static schema = SimulationInstanceSchema;
}
Schema.RegisterSchema.call(SimulationInstance);