export interface IPost {
    id: number;
    title: string;
    description: string;
}
export interface IPostState {
    posts: IPost[];
}
