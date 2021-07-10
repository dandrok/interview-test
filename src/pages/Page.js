import { useState, useEffect } from 'react'
import Main from '../components/Main'
import Header from '../components/Header'
import Margins from '../components/Margins'
import Title from '../components/Title'

const Page = () => {
  const [data, setData] = useState([])

  const [priceFilterParam, setPriceFilterParam] = useState('All')
  const [filterParam, setFilterParam] = useState('All')
  const [q, setQ] = useState('')
  const [searchParam, setSearchParam] = useState([])
  const [searchParamTwo, setSearchParamTwo] = useState([])

  //fetch data
  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        console.log(response)
        return response.json()
      })
      .then(function (myJson) {
        console.log(myJson)
        setData(myJson)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  //filter data
  function search(data) {
    return (
      data
        .filter(
          (item) =>
            (filterParam === 'All' || item.tags.includes(filterParam)) &&
            (searchParam.length === 0 ||
              (searchParam.every((tag) => item.tags.includes(tag)) &&
                JSON.stringify(item).toLowerCase().indexOf(q.toLowerCase()) >
                  -1))
        )
        //here I tried to filter the prices
        .filter((item) => {
          const price = parseFloat(item.price.substring(1))
          return (
            priceFilterParam === 'All' ||
            (priceFilterParam === 'Low' && price <= 10) ||
            (priceFilterParam === 'Medium' && price > 10 && price <= 20) ||
            (priceFilterParam === 'High' && price > 20)
          )
        })
    )
  }

  const inputChangedHandler = (event) => {
    const value = event.target.value
    const index = searchParam.indexOf(value)
    if (index > -1) {
      const updatedParam = [...searchParam]
      updatedParam.splice(index, 1)
      setSearchParam(updatedParam)
    } else {
      setSearchParam([...searchParam, event.target.value])
      console.log(setSearchParam)
    }
  }

  return (
    <>
      <Title />
      <Margins>
        <Header data={data} inputChangedHandler={inputChangedHandler} />
        <Main data={data} search={search} />
      </Margins>
    </>
  )
}

export default Page
