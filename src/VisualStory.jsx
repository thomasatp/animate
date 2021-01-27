import React, {useRef, useState, useEffect} from 'react';
import img2 from './medias/img2.jpg'
import img3 from './medias/img3.jpg'

export default function VisualStory({direction}) {

    const el1 = useRef();

    const init = window.innerHeight/2

    const [reveal1,
        setReveal1] = useState('')
    const [translate,
        setTranslate] = useState(init)

    useEffect(() => {

        window
            .addEventListener('scroll', function () {
                const pos1 = el1.current.offsetTop - window.scrollY - window.innerHeight
                console.log(pos1)
                pos1 < 0
                    ? setTimeout(() => {
                        setReveal1('reveal')
                    }, 500) && setTranslate(init+pos1/2)
                    : setTimeout(() => {
                        setReveal1('')
                    }, 500);
            })
    })

    return (
        <div
            ref={el1}
            className={`strate-visual-story hidden ${reveal1}`}
            style={{
            flexDirection: direction
        }}>
            <div className="visual-one">
                <img className="cover" src={img2} alt="img"/>
            </div>
            <div
                style={{
                transform: `translateY(${translate}px)`
            }}
                className="paralax">
                <div className="visual-two">
                    <img className="cover" src={img3} alt="img"/>
                </div>
                <div className="text-visual-story">
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