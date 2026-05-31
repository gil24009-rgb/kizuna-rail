import { getAllRoutes, getListOfRegions, getListOfSeasons } from '../../models/model.js';

export default async (req, res) => {
    const regions = await getListOfRegions();
    const seasons = await getListOfSeasons();
    const query = req.query;
    let routes = await getAllRoutes();

    if (query.region) {
        routes = routes.filter(route => route.region.toLowerCase() === query.region.toLowerCase());
    }

    if (query.season) {
        routes = routes.filter(route => route.bestSeason.toLowerCase() === query.season.toLowerCase());
    }

    res.render('routes/list', { 
        title: 'Scenic Train Routes',
        regions,
        routes,
        seasons,
        query
    });
};
