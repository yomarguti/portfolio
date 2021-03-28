import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center px-8 pt-10 i md:flex-row md:items-end">
      <div className="py-4 w-200">
        <img
          src="/perfil.jpg"
          alt="Foto de perfil"
          width="200px"
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="flex flex-col items-center py-4 md:pl-4 md:items-start md:justify-end">
        <h1 className="inline text-4xl font-bold md:text-5xl lg:text-6xl text-primary">
          Yomar Gutiérrez
        </h1>
        <h3 className="text-xl italic text-gray-600 md:text-3xl ">Desarrollador Web</h3>
      </div>
    </div>
  );
};

export default Home;
