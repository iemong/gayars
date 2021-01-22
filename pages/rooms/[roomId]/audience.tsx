import * as React from 'react'
import { Head } from 'next/document'
import Audience from '../../../src/components/organisms/room/Audience'
import Header from '../../../src/components/organisms/Header'

const AudiencePage = () => {
    return (
        <>
            <Head title={'参加者画面 | gayars'} />
            <Header />
            <Audience />
        </>
    )
}

export default AudiencePage
