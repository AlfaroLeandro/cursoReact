import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { testimonios } from '../constants';

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

export default SectionWrapper(Contact, 'contact');
