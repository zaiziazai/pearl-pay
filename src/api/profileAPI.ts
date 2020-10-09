import { IProfile } from "./model";

export const fetchProfiles = (): Promise<IProfile[]> => {
  return new Promise<IProfile[]>((resolve, reject) => {
    // reject({message: "Could not fetch profiles data"})
    setTimeout(() => {
      resolve([
        {
          name: "Contoso Contoso",
          birthdate: new Date("9/10/1998"),
          position: "Software Engineer",
          aboutMe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        },
        {
          name: "Contoso Contoso",
          birthdate: new Date("9/10/1998"),
          position: "Software Engineer",
          aboutMe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        },
        {
          name: "Contoso Contoso",
          birthdate: new Date("9/10/1998"),
          position: "Software Engineer",
          aboutMe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        },
      ]);
    }, 500);
  });
};
