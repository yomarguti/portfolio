import Link from 'next/link';

const BlogListItem = ({ post: { id, title, summary, date } }) => {
  return (
    <article className="flex flex-col items-start py-4 sm:px-3 sm:shadow-md">
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="text-xs italic text-gray-400">{date}</p>
      <p className="pt-2 tracking-tight">{summary}</p>
      <Link href={`/blog/${id}`}>
        <span className="self-end px-3 py-1 mt-2 text-white border rounded-lg cursor-pointer bg-primary">
          <a className="text-sm font-bold">Leer más...</a>
        </span>
      </Link>
    </article>
  );
};

export default BlogListItem;
