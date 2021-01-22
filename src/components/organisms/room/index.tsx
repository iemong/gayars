import * as React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import Button from '../../atoms/Button'
import { COLORS } from '../../../assets/const'

type Props = {
    roomId: string
}

const RoomIndex = (props: Props) => {
    const { roomId } = props
    const router = useRouter()

    const handleClickMoveHost = () => {
        router.push({
            pathname: '/rooms/[roomId]/host',
            query: { roomId },
        })
    }

    const handleClickMoveAudience = () => {
        router.push({
            pathname: '/rooms/[roomId]/audience',
            query: { roomId },
        })
    }

    return (
        <>
            <Text>会場を作成しました</Text>
            <Button onClick={handleClickMoveHost}>{'発表者 >'}</Button>
            <StyledButton styleType={'invert'} onClick={handleClickMoveAudience}>
                {'参加者 >'}
            </StyledButton>
        </>
    )
}

export default RoomIndex

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
