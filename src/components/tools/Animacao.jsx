import { Fragment, useEffect } from "react";
import ScrollReveal from 'scrollreveal';

export default function Animacao({css_identifier, easing_type, duration}) {

    useEffect(() => {
        ScrollReveal({reset:false}).reveal(`${css_identifier}`, {
            duration: duration,
            scale:0.1,
            easing: easing_type
        });
    },[]);

    return (
        <Fragment/>
    )
}