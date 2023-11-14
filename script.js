const Scrappey = require('scrappey-wrapper');

// Replace the following details with your own details
const SCRAPPEY_API_KEY = 'API_KEY';

// Create an instance of Scrappey
const scrappey = new Scrappey(SCRAPPEY_API_KEY);

// Optional to add proxy, one is added if not added
const PROXY = 'http://user:pass@host:port'

async function run() {
    try {

        /**
         * Creates a session
         */
        const session = await scrappey.createSession({
            // proxy: PROXY //optional
            proxyCountry: 'Turkey' //select country for better success rate
        })

        const scrape = await scrappey.get({
            "url": "https://www.sahibinden.com/",
            "session": session.session,
        })

        console.log(JSON.stringify(scrape.solution, undefined, 4))

        await scrappey.destroySession({
            "session": session.session
        })

    } catch (error) {
        console.error(error);
    }
}

run();