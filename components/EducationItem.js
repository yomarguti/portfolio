const EducationList = ({ educationData: { title, location, year } }) => {
  return (
    <li className="flex flex-col sm:flex-row sm:items-baseline">
      <h4 className="text-lg font-semibold text-gray-600">{title}</h4>
      <p className="sm:pl-5">
        {`${location} - `}
        <span className="italic text-gray-500">{year}</span>
      </p>
    </li>
  );
};

export default EducationList;
