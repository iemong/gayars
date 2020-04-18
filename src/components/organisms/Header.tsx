import * as React from 'react'
import styled from '@emotion/styled'
import { COLORS } from '../../assets/const'

type Props = {
    isAudiencePage?: boolean
}

export default ({ isAudiencePage }: Props) => {
    return (
        <Wrapper>
            <Title data-is-audience={isAudiencePage}>GAYA - CHAT</Title>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    width: 100%;
`

const Title = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    color: ${COLORS.WHITE};
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: ${COLORS.LIGHT_ORANGE};
    &[data-is-audience='true'] {
        background-color: ${COLORS.GREEN};
    }
`
