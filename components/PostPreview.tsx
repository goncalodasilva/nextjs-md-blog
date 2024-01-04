import Link from "next/link"
import { PostMetadata } from "./PostMetadata"

const PostPreview = (props: PostMetadata) => {
  return (
    <Link href={`/blog/${props.slug}`}>
      <div className='border border-stone-200 p-4 rounded-md shadow-md bg-stone-150 hover:bg-stone-200'>
        <h2 className='font-bold text-yellow-600'>{props.title}</h2>
        <p className='text-sm text-stone-400'>{props.date}</p>
        <p className='text-stone-700'>{props.subtitle}</p>
      </div>
    </Link>
  )
}

export default PostPreview