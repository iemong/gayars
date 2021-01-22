import * as React from 'react'
import styled from '@emotion/styled'
import css from '@emotion/css'
import { COLORS } from '../../assets/const'

enum StyleType {
    default,
    invert,
    circle,
    square,
}

type StyleProps = {
    width?: string
    height?: string
    styleType?: keyof typeof StyleType
    className?: string
}

type Props = StyleProps & {
    children?: JSX.Element | string
    onClick?: () => void
}

const Button = (props: Props) => {
    const { children, styleType = 'default', className, width, height, onClick } = props

    return (
        <ButtonStyle
            width={width}
            height={height}
            role="button"
            className={className}
            styleType={styleType}
            onClick={onClick}
        >
            {children}
        </ButtonStyle>
    )
}

export default Button

const AdditionalStyle = (props: StyleProps) => {
    if (props.styleType === 'default') {
        return css({
            width: props.width,
            height: props.height,
            background: COLORS.LIGHT_ORANGE,
        })
    } else if (props.styleType === 'invert') {
        return css({
            width: props.width,
            height: props.height,
            background: COLORS.GREEN,
        })
    } else if (props.styleType === 'circle') {
        return css({
            width: '180px',
            height: '180px',
            background: COLORS.LIGHT_ORANGE,
            borderRadius: '50%',
            border: `4px solid ${COLORS.ORANGE}`,
            fontSize: '48px',
            color: COLORS.WHITE,
        })
    } else if (props.styleType === 'square') {
        return css({
            width: '100px',
            height: '100px',
            background: COLORS.LIGHT_GREEN,
            border: `2px solid ${COLORS.GREEN}`,
            color: COLORS.GREEN,
        })
    }
}

const ButtonStyle = styled.div<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 24px;
    width: 300px;
    height: 80px;
    margin: 0 auto;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    &:hover {
        filter: saturate(130%);
    }
    &:active {
        filter: saturate(160%);
    }
    ${AdditionalStyle};
`
