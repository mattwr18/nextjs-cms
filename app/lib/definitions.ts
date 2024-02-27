export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  admin: boolean;
};

export type Contributor = {
  id: string;
  first_name: string;
  last_name: string;
};

export type Request = {
  id: string;
  title: string;
  text: string;
};
