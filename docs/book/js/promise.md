# 将请求合并

如果两个请求在短时间内重复请求，则合并这个请求

``` js
function fetchs (ids) {
			return Promise.resolve()
				.then(() => {
					return ids.map(id => ({id, name: 'xxx'}))
				})
		}
		function schedule (fn) {
			let resolves = [], timeout = null, params = [], state = []

			function clean () {
				clearTimeout(timeout)
				timeout = null
			}

			function initClean () {
				clean()
				params = []
				resolves = []
				state = []
			}

			function later () {
				timeout = setTimeout(() => {
					fn(params)
						.then(data => {
							state.forEach((d, idx) => {
								resolves[idx](data[idx])
							})
						})
						.finally(initClean)
				}, 100)
			}

			return function (ids) {
				return new Promise((resolve, reject) => {
					let nowTime = Date.now()
					resolves.push(resolve)
					state.push(...ids)
					
					if (!timeout) {
						params = params.concat(ids)
						
						later()
					} else {
						params = params.concat(ids)
						clean()
						later()
					}
				})
			}
		}

		let debounce = schedule(fetchs)
		debounce([1])
			.then(data => {
				console.log(data)
			})
		debounce([2])
			.then(data => {
				console.log(data)
			})

		setTimeout(() => {
			debounce([5])
			.then(data => {
				console.log(data)
			})
		}, 1000)
```