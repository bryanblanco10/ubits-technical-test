export interface Login {
  username: string;
  password: string;
}

export interface AuthResponse {
  code: number;
  message: Message;
}

export interface Message {
  user: User;
  token: string;
}

export interface User {
  id: string;
  name: string;
  roles: Role[];
}

interface Role {
  id: number;
  name: string;
}