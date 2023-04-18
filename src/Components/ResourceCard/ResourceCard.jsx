


import { jugard } from '../../Data';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Typewriter from 'typewriter-effect'

import './ResourceCard.scss';

const ResourceCard = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {

    // console.log('useeffect is triggerin resource ');
    setAbouts(jugard)
  },[]);

  return (
    <>

<section className='App_body'>

<motion.div
        initial={{opacity: 0}}
        whileInView={{x: [40, 0], opacity: 1}}
        transition={{ duration: 1}}
      >
  
      <h1 className="head-text">Make Your learning   
      <h3 className="greeting-text">
              <Typewriter
                options={{
                  strings: [
                    'Easier.',
                    'Faster.',
                    'Convenient.',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: '',
                  delay: 100,
                }}
              />
            </h3>

            </h1>
      
      

      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [40, 0], opacity: 1}}
        transition={{ duration: 1}}
      >
      <div className="app_inner">
        {abouts.map((about, index) => (
          <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app_inner_item"
          key={about.title + index}
          >
            <img src={about.img} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.discription}</p>
          </motion.div>
        ))}
      </div>
        </motion.div>
        </section>
    </>
  );
};

export default ResourceCard;
