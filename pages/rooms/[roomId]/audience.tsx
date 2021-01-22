import * as React from 'react'
import styled from '@emotion/styled'
import Head from '../../../src/components/organisms/Head'
import Audience from '../../../src/components/organisms/room/Audience'
import Header from '../../../src/components/organisms/Header'

const AudiencePage = () => {
    return (
        <>
            <Head title={'参加者画面 | gayars'} />
            <Header />
            <Inner>
                <Audience />
            </Inner>
        </>
    )
}

export default AudiencePage

const Inner = styled.div`
    padding-top: 40px;
`
