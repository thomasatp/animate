import React, {useState, useEffect} from 'react'
import imgStart from './medias/imgStart.jpg'

export default function Starter() {

    const [reveal,
        setReveal] = useState("")

    useEffect(() => {

        setTimeout(() => {
            setReveal('reveal')
        }, 500);
    })
    

    return (
        <div className="starter">
            <img className="cover" src={imgStart} alt="img"/>
            <div className={`text-starter hidden ${reveal}`}>
                <h1 className="title">On the other hand</h1>
                <p className="paragraph">But I must explain to you how all
                    this mistaken idea of denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the actual teachings of
                    the great explorer</p>
                <div className="btn">Discover</div>
            </div>
        </div>
    )

}