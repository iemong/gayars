import * as React from 'react'
import Head from 'next/head'

type Props = {
    children: JSX.Element | string
}

const Main = (props: Props) => {
    const { children } = props
    return (
        <React.Fragment>
            <Head>
                <title>starter</title>
            </Head>
            {children}
        </React.Fragment>
    )
}

export default Main
