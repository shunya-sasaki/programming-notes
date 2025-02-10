import { Category } from '../interfaces/Category';

export const findCategoryByPageRef = (
  refName: string,
  categories: Array<Category>,
): Category | null => {
  let ret: Category | null = null;
  categories.map((category) => {
    if (category.pageRef === refName) {
      ret = category;
    }
  });
  return ret;
};
