export interface ILoginResponse {
  email: string;
  token: string;
}

export interface AuthState {
  loading: boolean;
  email: string | null;
  token: string | null;
  error: unknown;
}
