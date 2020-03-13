import { Fragment } from 'react'

import { NextPage } from 'next'

interface Props {
    query: { title: string }
}

const ServerProps: NextPage<Props> = ({ query: { title } }) => (
    <Fragment>
        <h1>Server Props Example</h1>
        <p>{title}</p>
    </Fragment>
)

ServerProps.getInitialProps = async (ctx: any) => {
    let { query } = ctx

    return { query }
}

export default ServerProps