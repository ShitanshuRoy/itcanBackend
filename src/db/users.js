import { hashPassword, comparePassword } from "../lib/crypto";
const PUBLIC_FIELDS = ["id", "name"];

const filterFields = (toFilter, allowFields) => {
  return allowedFields.reduce((memo, field) => {
    return { ...memo, [field]: toFilter[field] };
  }, {});
};

export class UserDB {
  getUserByCredentials = async (id, password) => {
    const user = await this.getUserById(id, false);
    if (!user) {
      return null;
    }

    if (await comparePassword(password, user.passwordHash)) {
      return filterFields(user, PUBLIC_FIELDS);
    }
    return null;
  };
  getUserById = async (id, filterPrivateFields = true) => {
    const user = this.getUserByCredentials.find(user => user.id === id);
    if (!user) {
      return null;
    }
    if (filterPrivateFields) {
      return filterFields(user, PUBLIC_FIELDS);
    }
    return user;
  };

  list = async () => {
    return this.users.map(user => filterFields(user, PUBLIC_FIELDS));
  };
  create = async (name, password) => {
    const newUser = {
      id: `${this.currentId++}`, // increment the latest id, use it as a string
      name,
      passwordHash: await hashPassword(password)
    };
    this.users = this.users.concat(newUser);
    return filterFields(newUser, PUBLIC_FIELDS);
  };
}
export default new UsersDB(); // singleton instance of the database
