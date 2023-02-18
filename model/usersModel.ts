export interface UserInfo {
  id: number;
  name: string;
  email: string;
}

export const users: UserInfo[] = [
  {
    id: 1,
    name: "admin",
    email: "admin@gmail.com",
  },
  {
    id: 2,
    name: "win",
    email: "win@win",
  },
];
