export interface ILoggedInUser {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered: boolean;
} 

export interface ILoginState {
    user: ILoggedInUser | null;
}