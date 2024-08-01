const { createServer } = require('http');
const { getJson } = require("serpapi");

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer(async (req, res) => {
    const allowed_domain = '*'  // Adjust with your domain or localhost port
    res.setHeader('Access-Control-Allow-Origin', allowed_domain);
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.url.startsWith('/search') && req.method === 'GET') {
        // Parse the URL to extract query parameters
        const url = new URL(req.url, `http://${hostname}:${port}`);
        const params = url.searchParams;
        const departureId = params.get('departure_id');
        const arrivalId = params.get('arrival_id');
        const outboundDate = params.get('outbound_date');
        const returnDate = params.get('return_date');
        const type = params.get('type');
        const travel_class = params.get('travel_class');
    
        try{
            const response = await getJson({
                engine: "google_flights",
                departure_id: departureId,
                arrival_id: arrivalId,
                outbound_date: outboundDate,
                return_date: returnDate,
                type: type,
                travel_class: travel_class, 
                currency: "USD",
                hl: "en",
                api_key: "145836cfc23d63354c5b75dd4764e743732afcc659835902d4a21c9afcc351b0"
            });
        
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response));
        }
        catch(error) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: error.message }));
        }
    } else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});