
import Link from 'next/link'
import React from 'react'
import styles from './Style.module.scss'
import { TbWorld } from "react-icons/tb";
import { IoArrowForwardOutline } from "react-icons/io5";

const projects = [
  {
    title: 'Query Blocks',
    text: 'Página web de la compañia hecha con NextJS/React',
    url: 'https://www.queryblocks.eu/',
  },
  {
    title: 'Pain',
    text: 'Dibujo de Pain de Naruto hecho solo con HTML & CSS.',
    url: 'https://diegozalo95.github.io/pain/',
  },
  {
    title: 'Lomas Hospitality',
    text: 'Página web cadena de hoteles.',
    url: 'https://www.lomashospitality.com/en/',
  },
  {
    title: 'Eren',
    text: 'Dibujo de Eren de Attack on Titans hecho solocon HTML & CSS.',
    url: 'https://diegozalo95.github.io/eren/',
  },
  {
    title: 'Estelar Hoteles',
    text: 'Página web de cadena de hoteles.',
    url: 'https://www.estelaraltamira.com/en/',
  },
  {
    title: 'SH Hotels',
    text: 'Página web de hoteles.',
    url: 'https://www.hotel-villa-gadea.com/es/',
  },
]

const Info = () => {
  return (
    <div className={styles.info} id='info'>
      <div className={styles.container}>
        <h3 className={styles.title} data-aos="fade-right">Algunos proyectos y trabajos</h3>
        <div className={styles.list}>
          {projects.map((item, index) => (
            <div className={styles.item} key={index} data-aos="fade-up">
              <div className={styles.circle}></div>
              <TbWorld className={styles.icon} />
              <p className={styles.name}>{item.title}</p>
              <p className={styles.text}>{item.text}</p>
              <Link href={item.url} className={styles.link} target='_blank'>Ver<IoArrowForwardOutline /></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Info