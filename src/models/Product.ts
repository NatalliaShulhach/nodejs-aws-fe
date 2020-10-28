import * as Yup from 'yup';

export type Product = {
  id: string,
  count: number,
  title: string,
  imageUrl: string,
  price: number,
  description: string[],
  tag: string
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
});
