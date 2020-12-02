import React from 'react';

const Footer = () => {
  return (
    <div className="w-full border border-gray-200 fixed bottom-0 pt-10 pb-2 flex flex-col items-center">
      <ul className="flex justify-center pb-6">
        <li className="px-4">
          <a href="mailto:yomar.guti@gmail.com" target="_blank">
            <img src="/correo.svg" alt="Correo electronico" />
          </a>
        </li>
        <li className="px-4">
          <a href="https://github.com/yomarguti" target="_blank">
            <img src="/github.svg" alt="Github" />
          </a>
        </li>
        <li className="px-4">
          <a href="https://www.linkedin.com/in/yomar-gutierrez/" target="_blank">
            <img src="/linkedin.svg" alt="Linkedin" />
          </a>
        </li>
        <li className="px-4">
          <a href="https://twitter.com/yomarguti" target="_blank">
            <img src="/twitter.svg" alt="Twitter" />
          </a>
        </li>
      </ul>
      <div className="text-xs">
        Iconos diseñados por{' '}
        <a href="https://www.flaticon.es/autores/freepik" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.es/" title="Flaticon">
          www.flaticon.es
        </a>
      </div>
    </div>
  );
};

export default Footer;
