import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import styles from './Card.module.css'

const Card = ({ id, title, price, description, tags, author }) => {
  return (
    <article className={styles.card}>
      <div>
        <div className={styles.card__first}>
          <div className={styles.card__name}>
            <FaTwitter className={styles.card__icon} />

            <span className={styles.card__author}>{author}</span>
          </div>
          <div className={styles.card__price}>
            <p>{price}</p>
          </div>
        </div>
        <div className={styles.card__title}>
          <h1>{title}</h1>
        </div>
        <div>
          <p className={styles.card__desc}>{description}</p>
        </div>
      </div>
      <div className={styles.card__tags}>
        {tags.map((t, index) => {
          return (
            <div className={styles.card__tag} key={index}>
              <p>{t}</p>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default Card
