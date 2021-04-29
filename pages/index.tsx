import * as React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import uniqueString from 'unique-string'
import Head from '../src/components/organisms/Head'
import Header from '../src/components/organisms/Header'
import Button from '../src/components/atoms/Button'
import { database } from '../src/assets/api/firebase'

const Home = (): JSX.Element => {
    const router = useRouter()
    const [isSending, setIsSending] = React.useState(false)
    const generateRoom = () => {
        if (isSending) return
        const uniq = uniqueString()
        const uniqRef = database.ref(`rooms/${uniq}`)
        uniqRef.set({ roomId: uniq }, () => {
            setIsSending(false)
            router.push('/rooms/[roomId]', `/rooms/${uniq}`)
        })
        setIsSending(true)
    }
    return (
        <>
            <Head title={'gayars'} />
            <Header />
            <Inner>
                <Button
                    onClick={() => {
                        generateRoom()
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
