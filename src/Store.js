import React, { Component, createContext } from 'react';
import debounce from './_utils/debounce';
// import technologies from './cv.data';

const StoreContext = createContext('StoreContext')
export const StoreProvider = StoreContext.Provider
export const StoreConsumer = StoreContext.Consumer


class Store extends Component {
    state = {
        elementsMap: [],
    }

    componentDidMount() {
        this.scroll = document.addEventListener("scroll", () => {
            debounce.bind(this)(this.handleScroll, 66)
        })
    }

    handleScroll = () => {
        const elements = this.state.elementsMap
        const inView = elements.find(item => item.value > window.pageYOffset) || elements[elements.length - 1]
        this.props.history.push(`/#${inView.name}`)
    }

    componentWillUnmount() {
        this.scroll.removeEventListener()
    }

    render() {
        const {state, props} = this
        return (
            <StoreProvider value={{
                ...state,
                actions: {
                    setElementsPositionMap: this.setElementsPositionMap
                }
            }}>{props.children}</StoreProvider>
        )
    }

    setElementsPositionMap = (elements=[]) => {
        const elementsMap = []
        elements.forEach(element => {
            const boundaries = document.getElementById(element).getBoundingClientRect()
            elementsMap.push({name: element, value: boundaries.bottom - boundaries.height / 2})
        })
        this.setState({elementsMap})
    }
}

export default Store;