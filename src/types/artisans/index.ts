import { IId } from "../shared";

export type IContact = {
  email: string;
  phone: string;
};

export type IWork = {
  name: string;
  description: string;
  url: string;
};

export interface IArtisan {
  id: IId;
  fullName: string;
  picture: string;
  bio: string;
  location: string;
  availability: boolean;
  profession: string;
  contact: IContact;
  work: IWork[];
}
