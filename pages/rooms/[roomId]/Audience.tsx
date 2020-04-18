import * as React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import Head from '../../../src/components/organisms/Head'
import Header from '../../../src/components/organisms/Header'
import { COLORS } from '../../../src/assets/const'
import Button from '../../../src/components/atoms/Button'
import { database } from '../../../src/assets/api/firebase'

export default () => {
    const {
        query: { roomId },
    } = useRouter()

    const handleClick = (id: number) => {
        const soundRef = database.ref(`rooms/${roomId}/sound${id}`)
        soundRef.transaction(sound => sound + 1)
    }

    return (
        <>
            <Head title={'参加者画面 | gayars'} />
            <Header isAudiencePage={true} />
            <Inner>
                <Text>参加者画面</Text>
                <Flex>
                    <Button
                        styleType={'square'}
                        onClick={() => {
                            handleClick(1)
                        }}
                    >
                        笑い
                    </Button>
                    <Button
                        styleType={'square'}
                        onClick={() => {
                            handleClick(2)
                        }}
                    >
                        笑い
                    </Button>
                    <Button
                        styleType={'square'}
                        onClick={() => {
                            handleClick(3)
                        }}
                    >
                        笑い
                    </Button>
                    <Button
                        styleType={'square'}
                        onClick={() => {
                            handleClick(4)
                        }}
                    >
                        笑い
                    </Button>
                    <Button styleType={'square'}>笑い</Button>
                    <Button styleType={'square'}>笑い</Button>
                    <Button styleType={'square'}>笑い</Button>
                    <Button styleType={'square'}>笑い</Button>
                    <Button styleType={'square'}>笑い</Button>
                    <Button styleType={'square'}>笑い</Button>
                </Flex>
            </Inner>
        </>
    )
}

const Inner = styled.div`
    padding: 40px 16px;
`

const Text = styled.p`
    font-style: normal;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.GREEN};
    margin-bottom: 40px;
`

const Flex = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`
