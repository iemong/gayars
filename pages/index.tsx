import * as React from 'react'
import styled from '@emotion/styled'
import Head from '../src/components/organisms/Head'
import Header from '../src/components/organisms/Header'
import Button from '../src/components/atoms/Button'

const Home = () => {
    return (
        <>
            <Head title={'gayars'} />
            <Header />
            <Title>Hello, world!</Title>
            <Button>会場を作る</Button>
            <Button styleType="invert">会場を作る</Button>
            <Button styleType="circle">ON</Button>
            <Button styleType="square">笑い</Button>
        </>
    )
}

export default Home

const Title = styled.h1`
    color: red;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
`
