import styles from './FirstTag.module.css'

const SecondTag = ({ inputChangedHandler }) => {
  return (
    <section className={styles.leftTag}>
      <div className={styles.leftTag__input}>
        <input
          type='checkbox'
          id='< $10'
          name='< $10'
          value='Low'
          onChange={inputChangedHandler}
          className={styles.input__custom}
        />
        <label className={styles.leftTag__inputR} for='< $10'>
          &#60; $10
        </label>
      </div>
      <div className={styles.leftTag__input}>
        <input
          type='checkbox'
          id='$10 - $20'
          name='$10 - $20'
          value='Medium'
          onChange={inputChangedHandler}
          className={styles.input__custom}
        />
        <label className={styles.leftTag__inputR} for='$10 - $20'>
          $10 - $20
        </label>
      </div>
      <div className={styles.leftTag__input}>
        <input
          type='checkbox'
          id='> $20'
          name='> $20'
          value='High'
          onChange={inputChangedHandler}
          className={styles.input__custom}
        />
        <label className={styles.leftTag__inputR} for='> $20'>
          &#62; $20
        </label>
      </div>
    </section>
  )
}

export default SecondTag
