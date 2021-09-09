import React, { FC } from "react"

import { RouteComponentProps } from "@reach/router"

type Props = RouteComponentProps<{ path: string; }>

const SecondPage: FC<Props> = () => {
  return (
    <div>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
    </div>
  )
}

export default SecondPage
