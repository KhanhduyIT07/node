import { Request, Response } from 'express';
import User from '../Models/index';

class UserController {
  async index(req: Request, res: Response) {
    const users = await User.find();
    console.log(users);

    res.render('index', {
      title: 'Home Page',
      name: users[0].name,
      phone: users[0].phone,
    });
  }
}
export default new UserController();
