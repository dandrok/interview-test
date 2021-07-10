import styles from './FirstTag.module.css'

const FirstTag = ({ inputChangedHandler }) => {
  return (
    <section className={styles.leftTag}>
      <div className={styles.leftTag__input}>
        <input
          type='checkbox'
          id='javascript'
          name='javascript'
          value='javascript'
          onChange={inputChangedHandler}
          className={styles.input__custom}
        />
        <label className={styles.leftTag__inputR} for='javascript'>
          javascript
        </label>
      </div>
      <div className={styles.leftTag__input}>
        <input
          type='checkbox'
          id='fundamentals'
          name='fundamentals'
          value='fundamentals'
          onChange={inputChangedHandler}
          className={styles.input__custom}
        />
        <label className={styles.leftTag__inputR} for='fundamentals'>
          fundamentals
        </label>
      </div>
      <div className={styles.leftTag__input}>
        <input
          type='checkbox'
          id='advanced'
          name='advanced'
          value='advanced'
          onChange={inputChangedHandler}
          className={styles.input__custom}
        />
        <label className={styles.leftTag__inputR} for='advanced'>
          advanced
        </label>
      </div>
      <div className={styles.leftTag__input}>
        <input
          type='checkbox'
          id='css'
          name='css'
          value='css'
          onChange={inputChangedHandler}
          className={styles.input__custom}
        />
        <label className={styles.leftTag__inputR} for='css'>
          css
        </label>
      </div>

      <div className={styles.leftTag__input}>
        <input
          type='checkbox'
          id='accessibility'
          name='accessibility'
          value='accessibility'
          onChange={inputChangedHandler}
          className={styles.input__custom}
        />
        <label className={styles.leftTag__inputR} for='accessibility'>
          accessibility
        </label>
      </div>
      <div className={styles.leftTag__input}>
        <input
          type='checkbox'
          id='svg'
          name='svg'
          value='svg'
          onChange={inputChangedHandler}
          className={styles.input__custom}
        />
        <label className={styles.leftTag__inputR} for='svg'>
          svg
        </label>
      </div>
      <div className={styles.leftTag__input}>
        <input
          type='checkbox'
          id='architecture'
          name='architecture'
          value='architecture'
          onChange={inputChangedHandler}
          className={styles.input__custom}
        />
        <label className={styles.leftTag__inputR} for='architecture'>
          architecture
        </label>
      </div>
    </section>
  )
}

export default FirstTag
