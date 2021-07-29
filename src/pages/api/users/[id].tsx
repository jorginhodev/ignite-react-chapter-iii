import { NextApiRequest, NextApiResponse } from "next";

const User = (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query);
  
  const users = [
    { id: 1, name: "Jorge" },
    { id: 2, name: "Diego" },
    { id: 3, name: "Rafa" },
  ];

  return response.json(users);
};

export default User;
