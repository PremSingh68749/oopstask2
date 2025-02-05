import fetch from 'node-fetch';
import { handleError ,filteredData} from './utils.js';
import { Post, FilteredPost } from './type.js';

// This is a simple example of 1st solid principle single responsiblity ;

// The Function fetch post should only be used to fetch json data;



const fetchpost = async (): Promise<FilteredPost[]> => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }

        const data = (await response.json()) as Post[];

        // Filtering the post with userId < 3 and id >10 and changing the format;

        const filteredData: FilteredPost[] = data
            .filter((post) => post.id > 10 && post.userId < 3)
            .map(({ userId, title, body }) => ({ userId, title, body }));

        return filteredData;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

// fetchpost()
//     .then(data => { /*console.log('filtered data', data)*/ })
//     .catch(error => { console.log(error) })



// Now we will update the code to apply single responsibility;

const newfetchpost = async (): Promise<FilteredPost[]> => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts1234");
        await handleError(response);
        const data = (await response.json()) as Post[];
        return await filteredData(data) 
    } catch (error) {
        console.error("Error fetching data:", error);
        return []
    }
}


newfetchpost().then((data) => {console.log('from new fetch',data)}).catch((error) => {console.error});
