import * as React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Howl } from 'howler'
import Button from '../../atoms/Button'
import { COLORS } from '../../../assets/const'
import { database } from '../../../assets/api/firebase'

export default () => {
    const [canPlay, setCanPlay] = React.useState(false)
    const [isPrepare, setIsPrepare] = React.useState(false)
    const router = useRouter()
    const roomId = router.query.roomId

    const se1 = React.useRef(new Howl({ src: [`/sound/se_bash.mp3`] }))
    const se2 = React.useRef(new Howl({ src: [`/sound/se_hahaha.mp3`] }))
    const se3 = React.useRef(new Howl({ src: [`/sound/se_hakushu.mp3`] }))
    const se4 = React.useRef(new Howl({ src: [`/sound/se_hyu.mp3`] }))
    const se5 = React.useRef(new Howl({ src: [`/sound/se_hyuuuu.mp3`] }))
    const se6 = React.useRef(new Howl({ src: [`/sound/se_nandeyanen.mp3`] }))
    const se7 = React.useRef(new Howl({ src: [`/sound/se_oh.mp3`] }))
    const se8 = React.useRef(new Howl({ src: [`/sound/se_iijan.mp3`] }))
    const se9 = React.useRef(new Howl({ src: [`/sound/se_wan.mp3`] }))
    const se10 = React.useRef(new Howl({ src: [`/sound/se_uho.mp3`] }))

    const [sound1, setSound1] = React.useState<{ [key: string]: number }>({ sound1: 0 })
    const [sound2, setSound2] = React.useState<{ [key: string]: number }>({ sound2: 0 })
    const [sound3, setSound3] = React.useState<{ [key: string]: number }>({ sound3: 0 })
    const [sound4, setSound4] = React.useState<{ [key: string]: number }>({ sound4: 0 })
    const [sound5, setSound5] = React.useState<{ [key: string]: number }>({ sound5: 0 })
    const [sound6, setSound6] = React.useState<{ [key: string]: number }>({ sound6: 0 })
    const [sound7, setSound7] = React.useState<{ [key: string]: number }>({ sound7: 0 })
    const [sound8, setSound8] = React.useState<{ [key: string]: number }>({ sound8: 0 })
    const [sound9, setSound9] = React.useState<{ [key: string]: number }>({ sound9: 0 })
    const [sound10, setSound10] = React.useState<{ [key: string]: number }>({ sound10: 0 })

    React.useEffect(() => {
        const soundRef = database.ref(`rooms/${roomId}`)
        soundRef.on('value', snapshot => {
            console.log(snapshot.val())
            if (isPrepare) {
                setSound1(snapshot.val().sound1)
                setSound2(snapshot.val().sound2)
                setSound3(snapshot.val().sound3)
                setSound4(snapshot.val().sound4)
                setSound5(snapshot.val().sound5)
                setSound6(snapshot.val().sound6)
                setSound7(snapshot.val().sound7)
                setSound8(snapshot.val().sound8)
                setSound9(snapshot.val().sound9)
                setSound10(snapshot.val().sound10)
            }
            setIsPrepare(true)
        })
    }, [isPrepare])

    React.useEffect(() => {
        if (canPlay) se1.current.play()
    }, [sound1])

    React.useEffect(() => {
        if (canPlay) se2.current.play()
    }, [sound2])

    React.useEffect(() => {
        if (canPlay) se3.current.play()
    }, [sound3])

    React.useEffect(() => {
        if (canPlay) se4.current.play()
    }, [sound4])

    React.useEffect(() => {
        if (canPlay) se5.current.play()
    }, [sound5])

    React.useEffect(() => {
        if (canPlay) se6.current.play()
    }, [sound6])

    React.useEffect(() => {
        if (canPlay) se7.current.play()
    }, [sound7])

    React.useEffect(() => {
        if (canPlay) se8.current.play()
    }, [sound8])

    React.useEffect(() => {
        if (canPlay) se9.current.play()
    }, [sound9])

    React.useEffect(() => {
        if (canPlay) se10.current.play()
    }, [sound10])

    return (
        <>
            <Text>発表者画面</Text>
            <Button
                styleType={'circle'}
                onClick={() => {
                    setCanPlay(!canPlay)
                }}
            >
                {canPlay ? 'ON' : 'OFF'}
            </Button>
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
    color: ${COLORS.ORANGE};
    margin-bottom: 40px;
`
