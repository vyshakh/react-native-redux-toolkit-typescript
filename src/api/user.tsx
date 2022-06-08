export interface userLoginDef {
  username: string;
  password: string;
}
const login = async (payload: userLoginDef) => {
  console.log(payload);
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return await response.json();
};

export {login};
