import React from 'react';
import SkillList from '@components/SkillList';

const Home = () => {
  return (
    <main className="flex flex-col items-center px-8 pt-10 sm:items-start md:items-center sm:justify-center sm:flex-row">
      <section className="flex flex-col items-center border-b sm:pt-24 sm:h-full sm:justify-center sm:border-0">
        <div className="py-4 w-200">
          <img
            src="/perfil.jpg"
            alt="Foto de perfil"
            width="200px"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col items-center pt-4 pb-2">
          <h1 className="inline text-4xl font-bold text-center w-72 text-primary">
            Yomar Gutiérrez
          </h1>
          <h3 className="text-xl italic text-gray-600 ">Web Developer</h3>
        </div>
      </section>
      <section className="w-full pt-5 sm:w-3/5 lg:w-skill-content">
        <h1 className="text-xl font-bold text-center text-gray-900">Skills</h1>
        <SkillList />
      </section>
    </main>
  );
};

export default Home;
