import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";
import fs from 'fs';

export const getPostMetadata = (): PostMetadata[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    
    // read the metadata from the md files, using gray-matter
    const posts = markdownPosts.map((filename) => {
      const fileContents = fs.readFileSync(`posts/${filename}`, 'utf8');
      const matterResults = matter(fileContents);
      return {
        title: matterResults.data.title as string,
        date: matterResults.data.date as string,
        subtitle: matterResults.data.subtitle as string,
        author: matterResults.data.author as string,
        slug: filename.replace(".md", "") as string
      } as PostMetadata
    })
    return posts;
  }