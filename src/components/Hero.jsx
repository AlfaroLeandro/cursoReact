import { bwmap } from '../assets';
import { styles } from '../styles';

const Hero = () => {
  return (
    <>
    {/* foto mapa */}
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen ">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-PermanentMarker
                font-extrabold uppercase">
                Leandro
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              Soy Leandro Alfaro, un arquitecto de software y desarrollador backend apasionado por crear soluciones tecnológicas innovadoras y escalables. 
              <br className="sm:block hidden" />Con una sólida experiencia en el diseño y desarrollo de sistemas distribuidos, APIs y microservicios, transformo ideas complejas en productos 
              <br className="sm:block hidden" />eficientes y de alto rendimiento. Mi misión es optimizar cada línea de código para asegurar que cada proyecto no solo cumpla, 
              <br className="sm:block hidden" />sino que supere las expectativas.
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

      </section>
    </>
  );
};

export default Hero;
