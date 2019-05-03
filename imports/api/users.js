import SimpleSchema from 'simpl-schema'
import { Accounts } from 'meteor/accounts-base';

Accounts.validateNewUser((user) => {
    return true;
});