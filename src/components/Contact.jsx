import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { testimonios } from '../constants';

import React from "react";
import { fadeIn, textVariant } from "../utils/motion";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Que dicen de mi</p>
          <h2 className={styles.sectionHeadText}>Testimonios.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonios.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};
/*
export default SectionWrapper(Feedbacks, "");

const TestimonialTimeline = ({ testimonios }) => {
  // Asegúrate de que testimonios es un array antes de mapearlo
  if (!testimonios || !Array.isArray(testimonios)) {
    return null; // o algún fallback en caso de que no haya testimonios
  }

  return (
    <div className="timeline-container">
      <div className="timeline">
        {testimonios.map((testimonial, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3 className="timeline-title">{testimonial.title}</h3>
              <p className="timeline-description">{testimonial.description}</p>
              <span className="timeline-date">{testimonial.date}</span>
            </div>
            <div className="timeline-point"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  console.log(testimonios);

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <h3 className={styles.sectionHeadTextLight}>Testimonios.</h3>
        <TestimonialTimeline testimonios={testimonios} />
      </motion.div>
    </div>
  );
};
*/
export default SectionWrapper(Feedbacks, 'contact');
