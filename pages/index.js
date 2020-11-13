import React from 'react';

const Home = () => {
  return (
    <div className="px-8 flex flex-col i md:flex-row md:items-end items-center pt-10">
      <div className="py-4 w-200">
        <img
          src="/perfil.jpg"
          alt="Foto de perfil"
          width="200px"
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="md:pl-4 flex flex-col items-center md:items-start md:justify-end py-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 inline">
          Yomar Gutiérrez
        </h1>
        <h3 className="text-xl md:text-3xl text-gray-600 italic ">Fullstack Web Developer</h3>
      </div>
    </div>
  );
};

export default Home;
