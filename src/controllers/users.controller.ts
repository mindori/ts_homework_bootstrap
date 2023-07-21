import { Router, Request, Response } from "express";
import { UsersService } from "../services/users.service";
import { container } from "tsyringe";

const router: Router = Router();
const userService = container.resolve(UsersService);

router.post("/register", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const result = await userService.register(username, password);
  res.json(result);
});

export const UsersController: Router = router;
