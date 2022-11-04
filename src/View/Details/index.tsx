import { useRouter } from "next/router"
import { FC } from "react"
import { ICountries } from "../../types/ICountries"
import { WrapDetails, RowDetails } from "./styled"

interface Props {
    data: ICountries
}

const ViewDetails: FC<Props> = ({data}) => {
    const router = useRouter()
    return (
        <WrapDetails>
            <button onClick={() => router.back()}>Back</button>
            <RowDetails>
                <div>
                    <img src={data?.flag}/>
                </div>
                <div>
                    <h2>{data?.name}</h2>
                    <div className="listado">
                        <p><b>Native Name: </b>{data?.nativeName}</p>
                        <p><b>Top Level Domain: </b>{data?.topLevelDomain}</p>
                        <p><b>Population: </b>{data?.population}</p>
                        <p><b>Currencies: </b>{data?.currencies.map((it) => (<>{it.name} </>))}</p>
                        <p><b>Region: </b>{data?.region}</p>
                        <p><b>Languages: </b>{data?.languages.map((it) => (<>{it.name} </>))}</p>
                        <p><b>Sub Region: </b>{data?.subregion}</p>
                        <p><b>Capital: </b>{data?.capital}</p>
                    </div>
                    <div className="borders">
                    <p>Border Countries: </p>
                        {data?.borders?.map((it) => (
                            <span>{it}</span>
                        ))}
                    </div>
                </div>
            </RowDetails>
        </WrapDetails>
    )
  }
  
  export default ViewDetails