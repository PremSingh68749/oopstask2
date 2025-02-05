
import { FilteredPost, Post } from "./type.js";

export const handleError = async (res: any): Promise<void> => {
    if (!res.ok) { throw new Error(`${res.status}`); }
}

export const filteredData = async (data: Post[]): Promise<FilteredPost[]> => {
    const temp: FilteredPost[] = data
        .filter((post: Post) => post.id > 10 && post.userId < 3)
        .map((data: Post) => ({
            userId: data.userId,
            title: data.title,
            body: data.body
        }));

    return temp;
};
