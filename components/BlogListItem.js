import Link from 'next/link';

const BlogListItem = () => {
  return (
    <article className="flex flex-col items-start py-4 sm:px-3 sm:shadow-md">
      <h1 className="text-lg font-semibold">Titulo del Blog</h1>
      <p className="text-xs italic text-gray-400">28/Marzo/2021</p>
      <p className="pt-2 tracking-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
      </p>
      <Link href="#">
        <span className="self-end px-3 py-1 mt-2 text-white border rounded-lg bg-primary">
          <a className="text-sm font-bold">Leer más...</a>
        </span>
      </Link>
    </article>
  );
};

export default BlogListItem;
