import React, {useRef, useState, useEffect} from 'react';
import img2 from './medias/img2.jpg'
import img3 from './medias/img3.jpg'

export default function VisualStory({direction}) {

    const elt1 = useRef();
    const elt2 = useRef();
    const elt3 = useRef();

    const init = window.innerHeight / 2

    const [reveal1,
        setReveal1] = useState('')
    const [reveal2,
        setReveal2] = useState('')
    const [reveal3,
        setReveal3] = useState('')
    const [translate,
        setTranslate] = useState(init)

    useEffect(() => {

        window
            .addEventListener('scroll', function () {

                const pos1 = elt1.current.offsetTop - window.scrollY - window.innerHeight
                let translator = init + pos1 / 3

                let pos2 = elt2.current.offsetTop - window.scrollY - window.innerHeight
                let pos3 = elt3.current.offsetTop - window.scrollY - window.innerHeight

                if (window.innerWidth > 767) {
                    pos2 += translator;
                    pos3 += translator;
                }

                if (pos1 < 0)
                     setTimeout(() => {
                        setReveal1('reveal')
                    }, 500) && requestAnimationFrame(() => setTranslate(translator))

                if (pos2 < 0)
                    setTimeout(() => {
                        setReveal2('reveal')
                    }, 500)

                if (pos3 < 0)
                    setTimeout(() => {
                        setReveal3('reveal')
                    }, 500)
            })
    })

    return (
        <div
            className={`strate-visual-story`}
            style={{
            flexDirection: direction
        }}>
            <div ref={elt1} className={`visual-one hidden ${reveal1}`}>
                <img className="cover" src={img2} alt="img"/>
            </div>
            <div
                style={{
                transform: `translateY(${translate}px)`
            }}
                className="paralax">
                <div ref={elt2} className={`visual-two hidden ${reveal2}`}>
                    <img className="cover" src={img3} alt="img"/>
                </div>
                <div ref={elt3} className={`text-visual-story hidden ${reveal3}`}>
                    <h1 className="title">On the other hand</h1>
                    <p className="paragraph">But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I will give you a complete
                        account of the system, and expound the actual teachings of the great explorer</p>
                    <div className="btn">Discover</div>
                </div>
            </div>
        </div>
    )
}