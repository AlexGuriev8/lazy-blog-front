export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface IPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  author: IUser;
  createdAtUtc: string;
}

export interface IPostFull extends IPost {
  body: string;

  code?: string;
  message?: string;
}
export interface IСreatePost {
  userId: string;
  title: string;
  summary: string;
  body: string;
}
