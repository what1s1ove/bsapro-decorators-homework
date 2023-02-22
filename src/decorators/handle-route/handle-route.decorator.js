import {server} from "../../server.js";

const handleRoute = ({method, url}) => (value, context) => {
  console.log(value, context);
  server.handleRoute(
    {
      method,
      url,
      handler: value
    }
  )
  return value
}

export {handleRoute}
