import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

const Post = ({ postData }) => {
  const { title, date, contentHtml } = postData;
  return (
    <main className="w-full px-3 pt-5 mx-auto text-gray-800 sm:px-5 md:w-content-md lg:w-content-lg sm:pt-7">
      <h1 className="text-2xl font-extrabold leading-tight sm:text-4xl text-primary">{title}</h1>
      <p className="pt-2 italic font-bold text-gray-400 sm:pt-5">{date}</p>
      <div className="post-data">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </main>
  );
};

export default Post;
