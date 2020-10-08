import { IQoutes } from "./model";

export const fetchQoutes = (): Promise<IQoutes[]> => {
  return new Promise<IQoutes[]>((resolve, reject) => {
    // reject({message: "Could not fetch data"})
    setTimeout(() => {
      resolve([
        {
          author: "Contoso Contoso",
          qoute: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        },
        {
          author: "Contoso Contoso",
          qoute: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        },
        {
          author: "Contoso Contoso",
          qoute: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        },
        {
          author: "Contoso Contoso",
          qoute: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        },
      ]);
    }, 500);
  });
};
