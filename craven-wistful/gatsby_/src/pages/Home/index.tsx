import React, { FC } from "react"
import { RouteComponentProps } from "@reach/router"

import PlansTable from "../../shared/modules/PlansTable"

type Props = RouteComponentProps<{ path: string; }>

const Home: FC<Props> = () => {
  return (
    <div>
      <h3>Home</h3>

      <PlansTable />
    </div>
  )
}

export default Home