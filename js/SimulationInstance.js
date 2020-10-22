import Schema from "../js/Schema";
import SimulationInstanceSchema from "../schema/SimulationInstance.json";
// Schema that represents resource values
export default class SimulationInstance extends Schema {
    static schema = SimulationInstanceSchema;
}
Schema.RegisterSchema.call(SimulationInstance);