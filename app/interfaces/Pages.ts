import { PageIndex } from "@/app/interfaces/PageIndex";

export interface Pages {
  [key: string]: {
    name: string;
    iconName: string;
    pageRef: string;
    pages: PageIndex[];
  };
}
