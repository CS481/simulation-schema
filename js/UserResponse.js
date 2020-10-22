import Schema from "../js/Schema";
import UserResponseSchema from "../schema/UserResponse.json";

export default class UserResponse extends Schema {
    static schema = UserResponseSchema;
}
Schema.RegisterSchema.call(UserResponse);