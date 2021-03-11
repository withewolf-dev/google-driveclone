import React, { useEffect, useRef } from 'react'
import { GlobalContext } from '../../Global/Global-state';

export default function index() {

    const {starred} = useContext(GlobalContext)
    const firstRender =useRef(true)

    const updateStar=()=>(
        firestore().collection('links').doc('5yAYOQ4idSVFNQWviXf3').update({
            star:true
        }).then(()=>console.log("updated")).catch((err)=>console.log(err))
    )
    console.log('star function');
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
          } else {
            console.log('starr working');
          }
    }, [starred])


    return (
        <h1>asdasd</h1>
    )
}
