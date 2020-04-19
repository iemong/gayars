import * as React from 'react'
import styled from '@emotion/styled'
import Button from '../../atoms/Button'
import { COLORS } from '../../../assets/const'

type Props = {
    onClick: (page: string) => void
}

const RoomIndex = (props: Props) => {
    const { onClick } = props
    return (
        <>
            <Text>会場を作成しました</Text>
            <Button onClick={() => onClick('host')}>{'発表者 >'}</Button>
            <StyledButton
                styleType={'invert'}
                onClick={() => {
                    onClick('audience')
                }}
            >
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
