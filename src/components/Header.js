import Container from './Container'
import FirstTag from './FirstTag'
import SecondTag from './SecondTag'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

import styles from './Header.module.css'

import { useState } from 'react'

const Header = ({ inputChangedHandler }) => {
  const [display, setDisplay] = useState('block')
  const [displayTwo, setDisplayTwo] = useState('block')

  const handleClick = () => {
    if (display === 'none') {
      setDisplay('block')
    } else {
      setDisplay('none')
      console.log(display)
    }
  }
  const handleClickTwo = () => {
    if (displayTwo === 'none') {
      setDisplayTwo('block')
    } else {
      setDisplayTwo('none')
      console.log(displayTwo)
    }
  }

  return (
    <>
      <Container>
        <section>
          <div className={styles.flex}>
            <div className={styles.flex__user}>Tags</div>
            <div onClick={handleClick}>
              {display === 'none' ? (
                <FaChevronUp className={styles.flex__icon} />
              ) : (
                <FaChevronDown className={styles.flex__icon} />
              )}
            </div>
          </div>
          <div style={{ display: display }}>
            <FirstTag inputChangedHandler={inputChangedHandler} />
          </div>
        </section>
        <section>
          <div className={styles.flex}>
            <div className={styles.flex__user}>Price</div>
            <div onClick={handleClickTwo}>
              {displayTwo === 'none' ? (
                <FaChevronUp className={styles.flex__icon} />
              ) : (
                <FaChevronDown className={styles.flex__icon} />
              )}
            </div>
          </div>
          <div style={{ display: displayTwo }}>
            <SecondTag inputChangedHandler={inputChangedHandler} />
          </div>
        </section>
      </Container>
    </>
  )
}

export default Header
