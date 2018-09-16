/**
 * Debounce function set timeout and clear timeout if function is called before timeout callback execution
 * @param callback
 * @param time
 */
function debounce(callback, time) {
	clearTimeout(this.state.debounceTimeout)
	const debounceTimeout = setTimeout(() => {
		callback()
	}, time)
	this.setState({ debounceTimeout })
}

export default debounce;
