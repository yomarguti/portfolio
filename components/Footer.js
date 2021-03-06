import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 flex flex-col items-center w-full h-24 pt-4 pb-2 border border-gray-300 sm:h-32 sm:pt-10 bg-neutral">
      <ul className="flex justify-center pb-3 sm:pb-6">
        <li className="px-4 sm:px-6 md:px-9">
          <a href="mailto:yomar.guti@gmail.com" target="_blank">
            <img src="/correo.svg" alt="Correo electronico" />
          </a>
        </li>
        <li className="px-4 sm:px-6 md:px-9">
          <a href="https://github.com/yomarguti" target="_blank">
            <img src="/github.svg" alt="Github" />
          </a>
        </li>
        <li className="px-4 sm:px-6 md:px-9">
          <a href="https://www.linkedin.com/in/yomar-gutierrez/" target="_blank">
            <img src="/linkedin.svg" alt="Linkedin" />
          </a>
        </li>
        <li className="px-4 sm:px-6 md:px-9">
          <a href="https://twitter.com/yomarguti" target="_blank">
            <img src="/twitter.svg" alt="Twitter" />
          </a>
        </li>
      </ul>
      <div className="text-xs sm:px-6 md:px-9">
        Iconos diseñados por{' '}
        <a href="https://www.flaticon.es/autores/freepik" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.es/" title="Flaticon">
          www.flaticon.es
        </a>
      </div>
    </footer>
  );
};

export default Footer;
