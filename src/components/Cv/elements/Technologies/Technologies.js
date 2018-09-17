import React from 'react';
import styles from './Technologies.sass';
import Technology from './Technology';

const Technologies = ({technologies}) => (
    <section className={styles.container}>
        <h2 className={styles.name}>Technologie</h2>
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
        trail: 0,
    }

    componentDidMount() {
        this.interval = setInterval(() => this.handleSlider(true), 3000)
    }

    componentWillUnmount() {
        window.clearInterval(this.interval)
    }

    handleSlider = (dir) => {
        let {order, trail, change} = this.state
        const element = document.querySelector("#technologies")
        const childrens = element.childNodes
        const handler = dir ? this.forward : this.back

        if(trail === childrens.length ) {
            trail = 0
            order = order + 1
        } else if(trail < 0) {
            order = order - 1
        }
        if (trail === -14) {
            trail = 0
        }

        childrens[trail < 0 ? childrens.length + trail : trail].classList.add(styles.hide)
        childrens[trail < 0 ? childrens.length + trail : trail].addEventListener("transitionend", e => handler(e, dir ? order + 1 : order))
        const value = dir ? trail + 1 : trail - 1
        this.setState({trail: value, order})
    }

    forward = (e, order) => {
        e.target.style.order = order
        setTimeout(() => {
            e.target.classList.remove(styles.hide)
        }, 100)
        e.target.removeEventListener(e.type, this.forward)
    }
    
    back = (e, order) => {
        e.target.style.order = order
        setTimeout(() => {
            e.target.classList.remove(styles.hide)
        }, 100)
        e.target.removeEventListener(e.type, this.back)
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