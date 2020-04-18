import * as React from 'react'
import styled from '@emotion/styled'
import Head from '../../../src/components/organisms/Head'
import Header from '../../../src/components/organisms/Header'
import { COLORS } from '../../../src/assets/const'
import Button from '../../../src/components/atoms/Button'

export default () => {
    return (
        <>
            <Head title={'参加者画面 | gayars'} />
            <Header isAudiencePage={true} />
            <Text>参加者画面</Text>
            <Flex>
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
`

const Flex = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`
