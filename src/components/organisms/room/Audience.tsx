import * as React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import Button from '../../atoms/Button'
import { COLORS } from '../../../assets/const'
import { database } from '../../../assets/api/firebase'

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
    color: ${COLORS.GREEN};
    margin-bottom: 40px;
`

const Flex = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`
