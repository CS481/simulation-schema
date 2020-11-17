import Schema from "./Schema";
import EffectSchema from "../schema/Effect.json";

export default class Effect extends Schema {
    static schema = EffectSchema;
}
Schema.RegisterSchema.call(Effect);