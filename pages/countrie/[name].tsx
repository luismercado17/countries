import { useRouter } from "next/router";
import Layout from "../../src/layout";
import ViewDetails from "../../src/View/Details";
import useCountrie from "../../src/View/Details/useDetails";

export default function Details() {
const { name } = useRouter().query as { name: string }
const {countrie} = useCountrie(name)
console.log(countrie)
  return (
    <Layout>
      <ViewDetails data={countrie!}/>
    </Layout>
  )
}
