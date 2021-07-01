# aupm_scraper

- This is the REST API for AUPM so that they can display prices on their website that match kitco.
- It can be found at `https://aupm-scraper.herokuapp.com/`

## /api/data

This is the only real endpoint needed at this time

- **[GET]** to `/api/data`: returns an object that contains the time, date, and bid price for each of the 5 precious metals AUPM deals with.