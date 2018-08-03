import $ from 'jquery'

export const fetchImages = (image) => {
	return new Promise((resolve, reject) => {
		$.get('http://localhost:8080/?url=' + image, (data) => {
			resolve(data)
			// console.log(data)
			console.log('data recieved')
		})
	})
	
}