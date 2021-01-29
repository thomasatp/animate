import React, {useRef, useState, useEffect} from 'react'
import push1 from './medias/push1.jpg'
import push2 from './medias/push2.jpg'
import push3 from './medias/push3.jpg'

function PushItem({img}) {

    const elt1 = useRef();

    const init = window.innerHeight / 2

    const [reveal1,
        setReveal1] = useState('')

    useEffect(() => {

        window
            .addEventListener('scroll', function () {
                const pos1 = elt1.current.offsetTop - window.scrollY - window.innerHeight
                if (pos1 < 0) 
                    setTimeout(() => {
                        setReveal1('reveal')
                    }, 500)
            })
    })

    return (
        <div ref={elt1} className={`push-item hidden ${reveal1}`}>
            <div className="img">
                <img className="cover" src={img} alt="img"/>
            </div>
            <a href="#" className="link">View product</a>
        </div>
    )

}

export default function Push() {
    return (
        <div className="strate-push">
            <PushItem img={push1}/>
            <PushItem img={push2}/>
            <PushItem img={push3}/>
        </div>
    )

}
