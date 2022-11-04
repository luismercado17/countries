import { useEffect, useState } from "react"

const useCountrie = (name: string) => {
    const [countrie, setCountrie] = useState()
    const [loading, setLoading] = useState(false)
  
    const getCountries = async () => {
        await 
        fetch(`https://restcountries.com/v2/name/${name}`)
        .then((res) => res.json())
        .then((data) => {
            setCountrie(data[0])
        })
    }
  
    useEffect(() => {
      if (name) {
        getCountries()
      }
    }, [name])
  
    return { countrie }
  }
  
  export default useCountrie