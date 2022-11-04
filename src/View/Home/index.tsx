import Link from "next/link"
import { FC, useEffect, useState } from "react"
import { ICountries } from "../../types/ICountries"
import { Card, RowCountries, RowFilter, WrapHome } from "./styled"

const ViewCountries: FC = () => {
    const [countries, setCountries] = useState<ICountries[]>([])
    const [isLoading, setLoading] = useState(false)
    const [region, setRegion] = useState()
    const getCountries = async () => {
        await 
        fetch(`https://restcountries.com/v2/all`)
        .then((res) => res.json())
        .then((data) => {
            setLoading(true)
            setCountries(data)
        })
    }
    const countriesForRegions = async () => {
        await 
        fetch(`https://restcountries.com/v2/region/${region}`)
        .then((res) => res.json())
        .then((data) => {
            setLoading(true)
            setCountries(data)
        })
    }
    useEffect(() => {
        if(region){
            countriesForRegions()
        }
        else {
            getCountries()
        }
    }, [region])

    const resetFilter = async () => {
        setRegion(undefined)
        // handleChange(undefined)
        // setRegion(e.target.value)
    }
    
    const handleChange = async (e: any) => {
        setRegion(e.target.value)
    }

    console.log(isLoading)
    
    return (
        <>
        {!isLoading && (
            <div style={{display:"block", textAlign: 'center'}}>
            <img src="/img/giphy.gif"/>
            </div>
        )}
        {!!isLoading && (
        <WrapHome>
            <RowFilter>
                <div>
                    <input type={"search"} placeholder="Buscar" />
                </div>
                <div>
                <select defaultValue='Filter By Region' value={region} onChange={handleChange} id="cars">
                    <option disabled>Filter By Region</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='Africa'>Africa</option>
                    <option value='Americas'>Americas</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                </select>
                {region && (
                    <button onClick={() => resetFilter()}>Reset</button>
                )}
                </div>
            </RowFilter>
            <RowCountries>
                {countries?.map((it) => (
                <Card>
                    <Link href={`countrie/${it?.name}`}> 
                    <img src={it?.flag}/>
                    <div>
                        <h3>{it?.name}</h3>
                        <p><b>Population: </b>{it?.population}</p>
                        <p><b>Region: </b>{it?.region}</p>
                        <p><b>Capital: </b>{it?.capital}</p>
                    </div>
                    </Link>
                </Card>
                ))}
            </RowCountries>
        </WrapHome>
        )}
      </>
    )
  }
  
  export default ViewCountries