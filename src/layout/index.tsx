import { FC, ReactElement, ReactNode } from "react"
import { Header } from "./styled";

interface Props {
    children: React.ReactNode;
  }
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
    <Header>
      <div className="container">
        <h2>Where in the world?</h2>
        <div>
          <p>Dark Mode</p>
        </div>
      </div>
    </Header>
      <main>
        <div className="container">
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout
