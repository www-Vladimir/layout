const url = "https://baconipsum.com/api/?type=lucky"
let qq = ["\n\t\t\t<div class=\"boxSubtitle\">\n\t\t\t\t<p class=\"subtitle\">We Make international calling simple, relible, and cheap <br> basedon your unique calling behavior.\n\t\t\t\t</p>\n\t\t\t</div>\n\t"]
function service(url) {
	return fetch(url).then((res) => res.json()).then((data) => {
		data.map(item => {
			qq.push(render(item));
			return qq
		}).join('');
		const random = Math.floor(Math.random() * qq.length);
		document.querySelector('.boxSubtitle').innerHTML = qq[random];
		return data
	});

}

function render(data) {
	return `
			<div class="boxSubtitle">
				<p class="subtitle">${data}
				</p>
			</div>
	`
}

service(url)

