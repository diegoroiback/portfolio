'use client'

import React from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiMailLine } from "react-icons/ri";


import styles from './Style.module.scss'

const Main = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content} data-aos="zoom-in-right">
          <h2 className={styles.name}>Diego Zapata López</h2>
          <h2 className={styles.title}>Desarrollador front-end</h2>
          <h2 className={styles.subtitle}>& Diseñador</h2>
          <button className={styles.btn} onClick={() => handleScroll('info')}>
            <div className={styles.border}></div>
            <div className={styles.line}></div>
          </button>
        </div>
        <div className={styles.images} data-aos="flip-right">
          <img src='/diego-photo.png' alt="Diego Zapata" className={styles.photo} />
          <a className={`${styles.icon} ${styles.email}`} target='_blank' href='mailto:diegozalo57@gmail.com'><RiMailLine /></a>
          <a className={`${styles.icon} ${styles.linkedin}`} target='_blank' href='https://www.linkedin.com/in/diego-zapata-lopez-757943190/'><FaLinkedinIn /></a>
          <a className={`${styles.icon} ${styles.github}`} target='_blank' href='https://github.com/diegozalo95'><FaGithub /></a>
        </div>
      </div>
    </div>
  )
}

export default Main