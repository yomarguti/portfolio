const skills = [
  {
    name: 'HTML',
    image: 'html.png',
  },
  {
    name: 'CSS',
    image: 'css.png',
  },
  {
    name: 'JavaScript',
    image: 'javascript.png',
  },
  {
    name: 'React',
    image: 'react.png',
  },
  {
    name: 'Redux',
    image: 'redux.png',
  },
  {
    name: 'Next.js',
    image: 'nextjs.png',
  },
  {
    name: 'Tailwind',
    image: 'tailwind.png',
  },
  {
    name: 'Node',
    image: 'nodejs.png',
  },
  {
    name: 'Express',
    image: 'express.png',
  },
];

const SkillList = () => {
  return (
    <ul className="grid grid-cols-2 gap-4 pt-5 sm:pt-8 md:grid-cols-3">
      {skills.map(({ name, image }) => {
        return (
          <li key={name} className="flex flex-col items-center">
            <div className="w-2/6 p-1 border-2 rounded-full sm:w-3/6 border-primary">
              <img className="w-full h-auto rounded-full" src={image} alt={name} />
            </div>
            <h3 className="pt-2 font-semibold text-gray-400">{name}</h3>
          </li>
        );
      })}
    </ul>
  );
};

export default SkillList;
