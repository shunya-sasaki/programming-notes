import { Page } from '@/interfaces/Page';

export interface Category {
  name: string;
  iconName: string;
  pageRef: string;
  pages: Array<Page>;
}
