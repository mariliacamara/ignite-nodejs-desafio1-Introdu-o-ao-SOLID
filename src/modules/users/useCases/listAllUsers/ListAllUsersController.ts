import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const user_id: string = request.get("user_id");
    try {
      const users = this.listAllUsersUseCase.execute({ user_id });
      console.log(users);
      return response.status(201).json(users);
    } catch (err) {
      return response.status(400).json({ "error": "Failed to list users." });
    }
  }
}

export { ListAllUsersController };
