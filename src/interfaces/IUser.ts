/* Only include properties from model that you want client to have access to */
export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  salt: string;
}

/* DTO = data transfer object - essentially form data that you will receive */
export interface IUserInputDTO {
  name: string;
  email: string;
  password: string;
}
