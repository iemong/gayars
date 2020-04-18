import * as React from 'react'
import styled from '@emotion/styled'
import Head from '../src/components/organisms/Head'

const Home = () => {
    return (
        <>
            <Head title={'gayars'} />
            <Title>Hello, world!</Title>
        </>
    )
}

export default Home

const Title = styled.h1`
    font-size: 20px;
    color: red;
`
