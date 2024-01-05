import { PostMetadata } from '@/components/PostMetadata';
import { getPostMetadata } from '@/components/utils';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

const getPost = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug
    }))
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPost(slug);
    return (
        <div>
            <h1 className='text-2xl text-stone-600'>{post.data.title}</h1>
            <p className='text-sm text-stone-400'>{post.data.date}</p>
            <br />
            <article className="prose lg:prose-xl prose-stone">
                <Markdown>{post.content}</Markdown>
            </article>
            <br />
            <p>Author: {post.data.author}</p>
        </div>
    )
}

export default PostPage