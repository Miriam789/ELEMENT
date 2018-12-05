const container = document.getElementById('awesomeContainer').style
const aElem = document.getElementById('awesomeDuckling')
const boundingClientRect = aElem.getBoundingClientRect()

aElem.onmousemove = function(e) {
	const x = e.clientX - boundingClientRect.left
	const y = e.clientY - boundingClientRect.top
	
	const xc = boundingClientRect.width/2
	const yc = boundingClientRect.height/2
	
	const dx = x - xc
	const dy = y - yc
	
	container.setProperty('--rx', `${ dy/-1 }deg`)
	container.setProperty('--ry', `${ dx/10 }deg`)
}

aElem.onmouseleave = function(e) {
	container.setProperty('--ty', '0')
	container.setProperty('--rx', '0')
	container.setProperty('--ry', '0')
}

aElem.onmousedown = function(e) {
	container.setProperty('--tz', '-25px')
}

document.body.onmouseup = function(e) {
	container.setProperty('--tz', '-12px')
}