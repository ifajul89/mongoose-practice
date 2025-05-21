export interface IName {
  firstName: string;
  middleName: string;
  lastName: string;
}

export interface IStudent {
  id: string;
  name: IName;
  email: string;
  age: number;
  gender: "male" | "female";
}
