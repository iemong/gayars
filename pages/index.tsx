import * as React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import Head from '../src/components/organisms/Head'
import Header from '../src/components/organisms/Header'
import Button from '../src/components/atoms/Button'

const Home = () => {
    const router = useRouter()
    return (
        <>
            <Head title={'gayars'} />
            <Header />
            <Inner>
                <Button
                    onClick={() => {
                        router.push('/rooms/[roomId]', '/rooms/1')
                    }}
                >
                    会場を作る
                </Button>
            </Inner>
        </>
    )
}

export default Home

const Inner = styled.div`
    padding-top: 40px;
`
