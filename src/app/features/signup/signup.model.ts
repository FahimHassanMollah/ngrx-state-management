export interface ISignupUser {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered: boolean;
} 

export interface ISignupState {
    user: ISignupUser | null;
}