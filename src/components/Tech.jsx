import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={styles.sectionHeadTextLight}>Leandro Alfaro</h3>
        <p className={styles.sectionSubTextLight}>Software Engineer</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      <div
        className="absolute bottom-[-10rem] w-full 
        flex justify-center items-center">
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 
              border-french border-dim flex
              justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-taupe mb-1"
            />
          </div>
        </a>
      </div>

    </>
  );
};

export default SectionWrapper(Tech, '');
