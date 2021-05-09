import AccountCreationSchema from "../schema/AccountCreation.json";
import Schema from "../js/Schema.js";

// Import for side effects
import UserSchema from "../schema/User.json";

// Schema that represents the user
export default class AccountCreation extends Schema {
    static schema = AccountCreationSchema;
}
Schema.RegisterSchema.call(AccountCreation);
