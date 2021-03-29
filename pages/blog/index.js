import BlogList from '@components/BlogList';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const postsData = getSortedPostsData();

  return {
    props: {
      postsData,
    },
  };
}

const Blog = ({ postsData }) => {
  return (
    <main className="w-full mx-auto text-gray-800 md:w-content-md lg:w-content-lg">
      <section className="px-4 pt-5 pb-5 border-b-2 md:pt-10">
        <h1 className="text-4xl font-extrabold">Blog</h1>
        <p className="pt-4 text-lg leading-snug tracking-wide sm:pt-6">
          Adentrarse en un mundo nuevo de conocimientos es un reto grandísimo para cualquier
          persona. Es una lucha constante en contra de tu propio cuerpo que intenta seguir en la
          rutina, seguir en su estado de tranquilidad y confort. Por esto, es necesario armarse de
          disciplina y constancia para aprender nuevos conocimientos y lograr nuestras metas. A
          continuación, les expongo algunos de mis aprendizajes en este viaje.
        </p>
      </section>
      <BlogList posts={postsData} />
    </main>
  );
};

export default Blog;
