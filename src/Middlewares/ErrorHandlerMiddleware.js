import NotFound from '../Errors/NotFoundError.js'

export default function (err, req, res, next) {
    console.log('Error catching.');
    console.log(err.message);

    if (err.message.toLowerCase().indexOf('validation') > 0) {
        return res.status(400).send(err.message);
    }

    if (err.message.toLowerCase().indexOf('duplicate') > 0) {
        return res.status(409).send(err.message);
    }

    if (err instanceof NotFound) {
        return res.status(404).send(err.message);
    }

    res.status(500).send('Some momkeys are deployed to look at your problem.');
    next(err);
}
