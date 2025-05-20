export interface IStudent {
  id: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  age: number;
  gender: 'male' | 'female';
}
