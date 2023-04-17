import { Request, Response } from 'express';
import About from '../Models/about';
// interface IAbout {
//   job: String;
//   year: String;
// }
class AboutController {
  async index(req: Request, res: Response) {
    const abouts = await About.find();
    console.log(abouts);

    res.render('about', {
      title: 'About',
      job: abouts[0].job,
      year: abouts[0].year,
    });
  }
}
export default new AboutController();
