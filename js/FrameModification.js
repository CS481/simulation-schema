import Schema from "./Schema";
import FrameModificationSchema from "../schema/FrameModification.json";

// Import for side-effects
import User from './User';
import Effect from './Effect';

export default class FrameModification extends Schema {
    static schema = FrameModificationSchema;
}
Schema.RegisterSchema.call(FrameModification);