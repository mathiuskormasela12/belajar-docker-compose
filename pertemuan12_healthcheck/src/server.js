const http = require('http');
const dotenv = require('dotenv');
const url = require('url');

dotenv.config({ path: './env' })

let index = 0;

const server = http.createServer((req, res) => {
	const path = url.parse(req.url, true);

	switch(path.pathname) {
		case '/test' :
			if(index === 3) {
				res.writeHead(500, {
					'Content-Type': 'application/json'
				});
			
				res.write(JSON.stringify({
					message: 'Failed'
				}));
			} else {
				res.writeHead(200, {
					'Content-Type': 'application/json'
				});
			
				res.write(JSON.stringify({
					message: 'Hello'
				}));

				index += 1;
			}
		break;

		default:
			res.writeHead(404, {
				'Content-Type': 'application/json'
			});
		
			res.write(JSON.stringify({
				message: '404'
			}));
			
	}

	res.end();
});

server
.listen(process.env?.PORT ?? 3000, () => {
	console.log('Magic happen at port', process.env?.PORT ?? 3000);
});