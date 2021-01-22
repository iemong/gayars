import * as React from 'react'
import styled from '@emotion/styled'
import Head from '../../../src/components/organisms/Head'
import Host from '../../../src/components/organisms/room/Host'
import Header from '../../../src/components/organisms/Header'

const HostPage = () => {
    return (
        <>
            <Head title={'主催者画面 | gayars'} />
            <Header />
            <Inner>
                <Host />
            </Inner>
        </>
    )
}

export default HostPage

const Inner = styled.div`
    padding-top: 40px;
`
