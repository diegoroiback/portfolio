import React from 'react'
import { TiLocation } from "react-icons/ti";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaGitAlt } from "react-icons/fa";
import { FaPenRuler } from "react-icons/fa6";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import styles from './Style.module.scss'

const skills = [
  {
    title: 'HTML',
    icon: <FaHtml5 />
  },
  {
    title: 'CSS',
    icon: <FaCss3Alt />
  },
  {
    title: 'JavaScript',
    icon: <FaJs />
  },
  {
    title: 'React JS',
    icon: <FaReact />
  },
  {
    title: 'SASS',
    icon: <FaSass />
  },
  {
    title: 'Git',
    icon: <FaGitAlt />
  },
  {
    title: 'Diseño',
    icon: <FaPenRuler />
  },
]

const Info = () => {
  return (
    <div className={styles.info} id='info'>
      <div className={styles.container}>
        <div className={styles.content} data-aos="fade-right">
          <div>
            <h3 className={styles.title}>Información</h3>
            <p className={styles.text}>Desarrollador Front-End con experiencia en proyectos utilizando React y Next.js, integración de APIs y optimización de interfaces interactivas. Mi formación como diseñador me permite aportar un buen nivel de detalle, asegurando una experiencia de usuario fluida y atractiva. Soy responsable, proactivo y me adapto bien al trabajo en equipo, colaborando eficazmente para alcanzar los objetivos comunes y superar expectativas.</p>
            <p className={styles.text2}><TiLocation /> Medellín, Colombia</p>
            <p className={styles.text2}><BsFillFileEarmarkCodeFill /> +6 años de experiencia</p>
          </div>
          <div>
            <h3 className={styles.title}>Información</h3>
            <p className={styles.text}>Técnica de diseño gráfico, Censa.<br />
              Tecnología de producción multimedia, Sena.<br />
              Cursos en Platzy y Udemy.
            </p>
          </div>
        </div>
        <div className={styles.skills} data-aos="fade-left">
          <h3 className={styles.title}>Conocimientos</h3>
          <div className={styles.list}>
            {skills.map((item, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.circle}></div>
                {item.icon}
                <p className={styles.name}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info