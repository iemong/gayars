import * as React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import Header from '../../../src/components/organisms/Header'
import Head from '../../../src/components/organisms/Head'
import { COLORS } from '../../../src/assets/const'
import Button from '../../../src/components/atoms/Button'

export default () => {

    const router = useRouter()

    return (
        <>
            <Head title={'会場を作成しました | gayars'} />
            <Header />

            <Text>会場を作成しました</Text>
            <Button
                onClick={() => {
                    router.push('/rooms/[roomId]/host', '/rooms/1/host')
                }}
            >
                {'発表者 >'}
            </Button>
            <Button
                styleType={'invert'}
                onClick={() => {
                    router.push('/rooms/[roomId]/audience', '/rooms/1/audience')
                }}
            >
                {'参加者 >'}
            </Button>
        </>
    )
}

const Text = styled.p`
    font-style: normal;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.ORANGE};
`
