import EducationItem from '@components/EducationItem';

const formalEducation = [
  { location: 'Fundación Universitaria San Martin', title: 'Ingeniería de Sistemas', year: 2017 },
];

const notFormalEducation = [
  { location: 'Platzi', title: 'Curso Básico de Javascript', year: 2021 },
  { location: 'Platzi', title: 'Estructuras de datos con Javascript', year: 2021 },
  { location: 'Platzi', title: 'Curso definitivo de HTML y CSS', year: 2021 },
  { location: 'Platzi', title: 'Curso de Next.js', year: 2021 },
  { location: 'Platzi', title: 'Curso Práctico de maquetacion en CSS', year: 2021 },
  { location: 'Platzi', title: 'Ecmascript 6', year: 2020 },
  { location: 'Platzi', title: 'Curso de Manipulación del DOM', year: 2020 },
  { location: 'Platzi', title: 'Curso de React', year: 2020 },
  { location: 'Platzi', title: 'Curso Práctico de React.js', year: 2020 },
  { location: 'Platzi', title: 'Tailwind', year: 2020 },
  { location: 'Platzi', title: 'Curso profesional de Git y Github', year: 2020 },
  { location: 'Platzi', title: 'Curso profesional de Javascript', year: 2020 },
  { location: 'Platzi', title: 'Curso profesional de React Hooks', year: 2020 },
  { location: 'Udemy', title: 'React - The complete Guide', year: 2020 },
  { location: 'Udemy', title: 'Mastering regular expressions', year: 2020 },
  { location: 'Platzi', title: 'Curso Básico de Node.js', year: 2019 },
];

const EducationPage = () => {
  return (
    <main className="w-full mx-auto text-gray-800 md:w-content-md lg:w-content-lg">
      <section className="px-4 pt-5 pb-1 border-b-2 sm:pb-5 md:pt-10">
        <h1 className="text-2xl font-semibold text-primary">Educación Formal</h1>
        <ul className="pt-4">
          {formalEducation.map((ed) => {
            return <EducationItem educationData={ed} key={ed.title} />;
          })}
        </ul>
      </section>
      <section className="px-4 pt-5 pb-1 border-b-2 sm:pb-5 md:pt-10">
        <h1 className="text-2xl font-semibold text-primary">Educación No Formal</h1>
        <ul className="pt-4">
          {notFormalEducation.map((ed) => {
            return <EducationItem educationData={ed} key={ed.title} />;
          })}
        </ul>
      </section>
    </main>
  );
};

export default EducationPage;
