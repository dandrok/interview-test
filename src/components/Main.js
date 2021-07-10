import Card from './Card'
import styles from './Main.module.css'

const Main = ({ data, search }) => {
  return (
    <main className={styles.main}>
      {search(data).map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          tags={item.tags}
          author={item.authorId}
        />
      ))}
    </main>
  )
}

export default Main
