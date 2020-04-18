import * as React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import Header from '../../../src/components/organisms/Header'
import Head from '../../../src/components/organisms/Head'
import { COLORS } from '../../../src/assets/const'
import Button from '../../../src/components/atoms/Button'

export default () => {
    const router = useRouter()
    const roomId = router.query.roomId
    return (
        <>
            <Head title={'会場を作成しました | gayars'} />
            <Header />

            <Inner>
                <Text>会場を作成しました</Text>
                <Button
                    onClick={() => {
                        router.push('/rooms/[roomId]/host', `/rooms/${roomId}/host`)
                    }}
                >
                    {'発表者 >'}
                </Button>
                <StyledButton
                    styleType={'invert'}
                    onClick={() => {
                        router.push('/rooms/[roomId]/audience', `/rooms/${roomId}/audience`)
                    }}
                >
                    {'参加者 >'}
                </StyledButton>
            </Inner>
        </>
    )
}

const Inner = styled.div`
    padding-top: 40px;
`

const Text = styled.p`
    font-style: normal;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.ORANGE};
    margin-bottom: 40px;
`

const StyledButton = styled(Button)`
    margin-top: 20px;
`
