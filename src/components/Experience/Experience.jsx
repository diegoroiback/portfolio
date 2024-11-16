import styles from './Style.module.scss'

const jobs = [
  {
    title: 'Que Impresión!',
    text: 'Ayudante en centro de impresión, encargado de ajustar diseños.',
    dates: '2014-2016'
  },
  {
    title: 'Latitude Digital',
    text: 'Encargado del desarrollo front end y diseño de páginas web, landing pages y mailings, manejar redes sociales y capacitar clientes.',
    dates: '2017-2019'
  },
  {
    title: 'Roiback',
    text: 'Encargado del desarrollo front end y optimización del performance de sitios web.',
    dates: '2019-Presente'
  },
]

function formatNumber(num) {
  num += 1
  return num.toString().padStart(2, '0');
}


const Experience = () => {
  return (
    <div className={styles.experience}>
      <div className={styles.container}>
        <h3 className={styles.title} data-aos="fade-left">Experienia laboral</h3>
          <div className={styles.list}>
            {jobs.map((item, index) => (
              <div className={styles.item} key={index} data-aos="fade-up">
                <p className={styles.position}>{formatNumber(index)}</p>
                <p className={styles.name}>{item.title}</p>
                <p className={styles.text}>{item.text}</p>
                <p className={styles.dates}>{item.dates}</p>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Experience