import React, {useRef, useState, useEffect} from 'react'
import img1 from './medias/img1.jpg'

export default function Story({direction}) {

    const elt1 = useRef();
    const elt2 = useRef();

    const [reveal1,
        setReveal1] = useState('')
    const [reveal2,
        setReveal2] = useState('')

    useEffect(() => {

        window
            .addEventListener('scroll', function () {
                const pos1 = elt1.current.offsetTop - window.scrollY - window.innerHeight
                const pos2 = elt2.current.offsetTop - window.scrollY - window.innerHeight
                pos1 < 0
                    ? setTimeout(() => {
                        setReveal1('reveal')
                    }, 500)
                    : setTimeout(() => {
                        setReveal1()
                    }, 500);
                pos2 < 0
                    ? setTimeout(() => {
                        setReveal2('reveal')
                    }, 800)
                    : setTimeout(() => {
                        setReveal2()
                    }, 500);
            })
    })

    

    return (
        <div
            className="strate-story"
            style={{
            flexDirection: direction
        }}>
            <div ref={elt1} className={`img-story--3-4 hidden ${reveal1}`}>
                <img className="cover" src={img1} alt="img"/>
            </div>
            <div ref={elt2} className="text-story">
                <h1 className={`title hidden ${reveal2}`}>On the other hand</h1>
                <p className={`paragraph hidden ${reveal2}`}>But I must explain to you how all
                    this mistaken idea of denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the actual teachings of
                    the great explorer</p>
                <div className={`btn hidden ${reveal2}`}>Discover</div>
            </div>
        </div>

    )

}