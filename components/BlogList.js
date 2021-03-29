import BlogListItem from './BlogListItem';

const BlogList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 px-4 pt-3 sm:pt-5 sm:grid-cols-2 sm:gap-5">
      {posts.map((post) => (
        <BlogListItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
