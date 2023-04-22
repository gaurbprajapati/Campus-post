import React from 'react'
import {motion} from 'framer-motion'
import './Card1.scss'

export const Card1 = (props) => {
  // const {img,title,discription}=about
  console.log(props.about);
  return (
    <>
<section>

<motion.div
        initial={{opacity: 0}}
        whileInView={{y: [40, 0], opacity: 1}}
        transition={{ duration: 1}}
      >
      <div className="app_inner">
        {props.about.map((about, index) => (
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
  )
}
