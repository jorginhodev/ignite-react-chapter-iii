import { NextApiRequest, NextApiResponse } from "next";

const Users = (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Jorge" },
    { id: 2, name: "Diego" },
    { id: 3, name: "Rafa" },
  ];

  return response.json(users);
};

export default Users;
