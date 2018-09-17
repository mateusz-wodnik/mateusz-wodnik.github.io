import React from 'react';
import styles from './Technologies.sass';
import Technology from './Technology';

const hand = (e) => {
    console.log('top')
    e.target.style.order = 1
    setTimeout(() => {
        e.target.classList.remove(styles.hide)
    }, 66)
    e.target.removeEventListener(e.type, hand)
}

const hand2 = (e) => {
    console.log('bottom')
    e.target.style.order = 0
    e.target.classList.remove(styles.hide)
    e.target.removeEventListener("transitionend", hand2)
}

const handleSlider = (e, dir) => {
    const element = document.querySelector("#technologies")
    element.style.minWidth = `${element.scrollWidth}px`
    if(dir) {
        element.childNodes[0].classList.add(styles.hide)
        element.childNodes[0].addEventListener("transitionend", hand)
    } else {
        element.childNodes[0].classList.add(styles.hide)
        element.childNodes[0].addEventListener("transitionend", hand2)
    }
}

const Technologies = ({technologies}) => (
    <section className={styles.container}>
        <h2 className={styles.name}>Technologie</h2>
        {/* <button onClick={(e) => handleSlider(e, true)}>elo</button>
        <button onClick={(e) => handleSlider(e, false)}>mordo</button> */}
        <Slider />
        <ul id="technologies" className={styles.list}>
            {technologies.map(technology => (
                <Technology key={technology.name} technology={technology} />
            ))}
        </ul>
    </section>
);

export default Technologies;

class Slider extends React.Component {
    state = {
        order: 0,
        trail: 0
    }
    handleSlider = (e, dir) => {
        const {order, trail} = this.state
        const element = document.querySelector("#technologies")
        const childrens = element.childNodes

        this.setState(state => ({ trail: state.trail + dir ? 1 : -1 }))
        childrens[0].classList.add(styles.hide)
        childrens[0].addEventListener("transitionend", dir ? this.forward : this.back)
    }

    forward = (e) => {
        console.log('top')
        e.target.style.order = 1
        setTimeout(() => {
            e.target.classList.remove(styles.hide)
        }, 66)
        e.target.removeEventListener(e.type, hand)
    }
    
    back = (e) => {
        console.log('bottom')
        e.target.style.order = 0
        e.target.classList.remove(styles.hide)
        e.target.removeEventListener("transitionend", hand2)
    }

    render() {
        return (
            <div>
                <button onClick={(e) => this.handleSlider(e, true)}>elo</button>
                <button onClick={(e) => this.handleSlider(e, false)}>mordo</button>
            </div>
        )
    }

}


const handleGallery = (e, right=true) => {
    const element = document.querySelector("#technologies")
    const {scrollWidth, offsetWidth, childNodes: {length}} = element
    const span = Math.floor(scrollWidth / length)
    const variable = window.getComputedStyle(element).getPropertyValue('--offsetX')
    let offset = Number(variable.slice(0, variable.length - 2))
    console.log(offset, scrollWidth - offsetWidth)
    if(-offset > scrollWidth - offsetWidth) offset = span
    console.log(offset, span)
    element.style.setProperty("--offsetX", `${right ? offset - span : offset + span}px`)
}