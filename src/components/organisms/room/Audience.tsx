import * as React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import Button from '../../atoms/Button'
import { COLORS } from '../../../assets/const'
import { database } from '../../../assets/api/firebase'

const Audience = (): JSX.Element => {
    const {
        query: { roomId },
    } = useRouter()

    const handleClick = (id: number) => {
        const soundRef = database.ref(`rooms/${roomId}/sound${id}`)
        soundRef.transaction((sound) => sound + 1)
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
                    コブシ
                </Button>
                <Button
                    styleType={'square'}
                    onClick={() => {
                        handleClick(2)
                    }}
                >
                    ハハハ
                </Button>
                <Button
                    styleType={'square'}
                    onClick={() => {
                        handleClick(3)
                    }}
                >
                    拍手
                </Button>
                <Button
                    styleType={'square'}
                    onClick={() => {
                        handleClick(4)
                    }}
                >
                    ヒュー！！
                </Button>
                <Button
                    styleType={'square'}
                    onClick={() => {
                        handleClick(5)
                    }}
                >
                    弱めのヒュー
                </Button>
                <Button
                    styleType={'square'}
                    onClick={() => {
                        handleClick(6)
                    }}
                >
                    なんでやねん
                </Button>
                <Button
                    styleType={'square'}
                    onClick={() => {
                        handleClick(7)
                    }}
                >
                    オッス！
                </Button>
                <Button
                    styleType={'square'}
                    onClick={() => {
                        handleClick(8)
                    }}
                >
                    いいじゃん
                </Button>
                <Button
                    styleType={'square'}
                    onClick={() => {
                        handleClick(9)
                    }}
                >
                    🐶
                </Button>
                <Button
                    styleType={'square'}
                    onClick={() => {
                        handleClick(10)
                    }}
                >
                    🦍
                </Button>
                <Button
                    styleType={'square'}
                    onClick={() => {
                        handleClick(11)
                    }}
                >
                    やるじゃないか
                </Button>
                <Button
                    styleType={'square'}
                    onClick={() => {
                        handleClick(12)
                    }}
                >
                    大笑い
                </Button>
                <Button
                    styleType={'square'}
                    onClick={() => {
                        handleClick(13)
                    }}
                >
                    中笑い
                </Button>
                <Button
                    styleType={'square'}
                    onClick={() => {
                        handleClick(14)
                    }}
                >
                    すごいすごい
                </Button>
                <Button
                    styleType={'square'}
                    onClick={() => {
                        handleClick(15)
                    }}
                >
                    おぉー
                </Button>
                <Button
                    styleType={'square'}
                    onClick={() => {
                        handleClick(16)
                    }}
                >
                    いいとも〜
                </Button>
            </Flex>
        </>
    )
}

export default Audience

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
