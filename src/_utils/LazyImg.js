import React, { Component, Fragment } from 'react';
import styles from './LazyImg.sass'

class LazyImg extends Component {
	state = {
		loading: true
	}

	handleLoad = (e) => {
		this.setState({ loading: false })
		e.target.style.opacity = 1
	}

	handleError = (e) => {
		this.setState({ loading: false })
		e.target.alt = 'No book cover'
		e.target.style.opacity = 1
	}

	render() {
		const { src, alt, className } = this.props
		const { loading } = this.state
		return	(
			<Fragment>
				{loading && src && <Spinner className={className} />}
				{src ?
					<img src={src}
						alt={alt}
						onLoad={this.handleLoad}
						onError={this.handleError}
						style={{opacity: 0, transition: "1s"}}
						className={className}
				/> :
					<div className={styles.container}>{alt}</div>
				}
			</Fragment>
		)
	}
}

export default LazyImg

const Spinner = ({className}) => (
	<div className={`${styles.container} ${className}`}>
		<span className={`${styles.ring} ${styles.ring1}`}></span>
		<span className={`${styles.ring} ${styles.ring2}`}></span>
	</div>
)
