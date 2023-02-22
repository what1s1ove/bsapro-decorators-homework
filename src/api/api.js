import {UsersApi} from "./users/users.api.js"

const initialiseApi = () => {
  new UsersApi();
};

export {initialiseApi};
