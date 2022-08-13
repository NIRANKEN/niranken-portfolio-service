export type ContactData = {
  name: string;
  email: string;
  message: string;
}

export type SendContactMessageResult = {
  name: string;
  email: string;
  message: string;
  errorDetail: string;
}