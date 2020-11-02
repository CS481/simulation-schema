import Schema from "../js/Schema";
import SimulationIdSchema from "../schema/SimulationId.json";

export default class SimulationId extends Schema {
    static schema = SimulationIdSchema;
}
Schema.RegisterSchema.call(SimulationId);