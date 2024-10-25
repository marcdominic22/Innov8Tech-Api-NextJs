import Crypto from 'crypto-js';

type Post = {
    id: string
    title: string
    desc: string
};

let posts: Post[] = [];

export const getPosts = () => posts;

export const addPosts = (post: Post) => {
    posts.push(post);
};

export const deletePosts = (id: string) => {
    posts = posts.filter((post) => post.id !== id);
};

export const updatePosts = (id: string, title: string, desc: string) => {
    const post = posts.find((post) => post.id === id);

    if (post) {
        post.title = title;
        post.desc = desc;
    } else{
        throw new Error("No ID Found");
    }
};

export const getById = (id: string) => {
    return posts.find((post) => post.id === id);
};

export const decrypt = (sessionKey: string) => {
    if(sessionKey){
        console.log(sessionKey);
        console.log(process.env.NEXT_PUBLIC_API_URL);
        const bytes  = Crypto.AES.decrypt(sessionKey, process.env.SSO_Key);
        
        const decryptValue = JSON.parse(bytes.toString(Crypto.enc.Utf8));

        return decryptValue;
    } else{
        throw new Error("No Session Key Found");
    }
};