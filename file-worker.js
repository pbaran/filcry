self.addEventListener("message", function(e) {
	var f = e.data
	try {
		var reader = new FileReaderSync()
		postMessage(
			{
				name: f.name,
				content: reader.readAsDataURL(f)
			}
		)
	} catch(e) {
		console.log("error")
	}
}, false)
