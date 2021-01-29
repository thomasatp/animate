import React, {useRef, useState, useEffect} from 'react'
import imgStart from './medias/imgStart.jpg'

export default function Starter({isFirst, classText, padding}) {

    const el1 = useRef();

    const init = window.innerHeight / 3

    const [reveal,
        setReveal] = useState("")
    const [reveal2,
        setReveal2] = useState("")
    const [translate,
        setTranslate] = useState(init)

    useEffect(() => {

        setTimeout(() => {
            setReveal('reveal')
        }, 800);

        setTimeout(() => {
            setReveal2('reveal2')
        }, 0);

        window.addEventListener('scroll', function () {
            const pos1 = el1.current.offsetTop - window.scrollY
            pos1 < window.innerHeight
                ? setTranslate(init - pos1 / 5)
                : setTranslate(init)
        })
    })

    function setPosition() {
        let response = "3rem"
        isFirst
            ? response = "5rem"
            : response = "3rem"
        return response
    }

    return (
        <div
            ref={el1}
            style={{
            padding: `${padding}`
        }}
            className="starter">
            <img className={`cover hidden2 ${reveal2}`} src={imgStart} alt="img"/>
            <div
                style={{
                transform: `translateY(${translate}px)`
            }}
                className="text-starter">
                <h1
                    style={{
                    fontSize: setPosition()
                }}
                    className={`title hidden ${reveal} ${classText}`}>On the other hand</h1>
                <p className={`paragraph hidden ${reveal}`}>But I must explain to you how all
                    this mistaken idea of denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the actual teachings of
                    the great explorer</p>
                <div className={`btn hidden ${reveal}`}>Discover</div>
            </div>
        </div>
    )

}