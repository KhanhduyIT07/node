import { Schema, model } from 'mongoose';

interface IAbout {
  job: String;
  year: String;
}
const aboutSchema = new Schema<IAbout>({
  job: {
    type: String,
  },
  year: {
    type: String,
  },
});
const About = model<IAbout>('About', aboutSchema);

export default About;
