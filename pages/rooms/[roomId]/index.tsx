import * as React from 'react'
import styled from '@emotion/styled'
import { DocumentContext } from 'next/document'
import Header from '../../../src/components/organisms/Header'
import Head from '../../../src/components/organisms/Head'
import RoomIndex from '../../../src/components/organisms/room'

type Props = {
    query: {
        roomId: string
    }
}

const RoomIndexPage = (props: Props) => {
    const {
        query: { roomId },
    } = props

    return (
        <>
            <Head title={'会場を作成しました | gayars'} />
            <Header />
            <Inner>
                <RoomIndex roomId={roomId} />
            </Inner>
        </>
    )
}

RoomIndexPage.getInitialProps = async ({ query }: DocumentContext) => ({ query })

export default RoomIndexPage

const Inner = styled.div`
    padding-top: 40px;
`
