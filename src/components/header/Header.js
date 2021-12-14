import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import header from '../../images/header7.jpeg'

export const Header = () => {

  const image = {
    backgroundImage: `url(${header})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <header style={image} className="py-5 border border-3">
      <div className="container  px-4 px-lg-5 my-5">
        <div data-aos="zoom-in">
          <div className="text-center border border-5 text-dark w-100">
            <h1 className="display-5 fw-bolder">Compra a tu manera</h1>
            <p className="lead fw-normal text-dark-50 mb-0">
              Tenemos todo lo que estas buscando
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
