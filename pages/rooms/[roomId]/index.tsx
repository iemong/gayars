import * as React from 'react'
import styled from '@emotion/styled'
import Header from '../../../src/components/organisms/Header'
import Head from '../../../src/components/organisms/Head'
import RoomIndex from '../../../src/components/organisms/room'
import Audience from '../../../src/components/organisms/room/Audience'
import Host from '../../../src/components/organisms/room/Host'

export default () => {
    const [pageName, setPageName] = React.useState('')
    console.log(pageName)
    return (
        <>
            <Head title={'会場を作成しました | gayars'} />
            <Header />

            <Inner>
                {(!pageName && (
                    <RoomIndex
                        onClick={(page: string) => {
                            setPageName(page)
                        }}
                    />
                )) ||
                    (pageName === 'audience' && <Audience />) ||
                    (pageName === 'host' && <Host />)}
            </Inner>
        </>
    )
}

const Inner = styled.div`
    padding-top: 40px;
`
