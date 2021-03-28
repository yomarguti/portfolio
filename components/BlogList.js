import BlogListItem from './BlogListItem';

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 px-4 pt-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
    </div>
  );
};

export default BlogList;
