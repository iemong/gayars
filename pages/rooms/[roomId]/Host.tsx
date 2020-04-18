import * as React from 'react'
import styled from '@emotion/styled'
import { COLORS } from '../../../src/assets/const'
import Button from '../../../src/components/atoms/Button'
import Header from '../../../src/components/organisms/Header'
import Head from '../../../src/components/organisms/Head'

export default () => {
    const [canPlay, setCanPlay] = React.useState(false)
    return (
        <>
            <Head title={'発表者画面 | gayars'} />
            <Header />
            <Inner>
                <Text>発表者画面</Text>
                <Button
                    styleType={'circle'}
                    onClick={() => {
                        setCanPlay(!canPlay)
                    }}
                >
                    {canPlay ? 'ON' : 'OFF'}
                </Button>
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
