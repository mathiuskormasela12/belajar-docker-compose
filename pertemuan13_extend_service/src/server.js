const http = require('http');
const dotenv = require('dotenv');
const url = require('url');

dotenv.config();

const { PORT: port = 3000 } = process.env;
console.log(process.env)

const server = http.createServer((req, res) => {
	const {pathname} = url.parse(req.url, true);

	switch (pathname) {
		case '/api/v1/users' :
			res.writeHead(200, {
				'Content-Type': 'application/json'
			});
			res.write(JSON.stringify({
				message: 'Success',
				name: process.env?.NODE_ENV ?? '-',
				results: [
					{
					  id: "33jffnwof32r2r",
						name: 'Yerin'
					}
				]
			}));
		break;

		default:
			res.writeHead(404, {
				'Content-Type': 'application/json'
			});
			res.write(JSON.stringify({
				message: 'Not Found'
			}));
	}

	res.end();
});

server.listen(port, () => {
	console.log(`The API is being run at ${port}`);
})