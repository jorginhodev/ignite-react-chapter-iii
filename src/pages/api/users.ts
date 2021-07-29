import { NextApiRequest, NextApiResponse } from "next";

const Api = (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Jorge" },
    { id: 2, name: "Diego" },
    { id: 3, name: "Rafa" },
  ];

  return response.json(users);
};

export default Api;
