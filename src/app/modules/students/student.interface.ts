export interface IName {
  firstName: string;
  middleName: string;
  lastName: string;
}

export interface IStudent {
  id: string;
  name: IName;
  age: number;
  gender: 'male' | 'female';
}
