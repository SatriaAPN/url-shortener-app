class ShortUrl{
    constructor(service){
        this._service = service;

        this.postShortUrl = this.postShortUrl.bind(this);
        this.getShortUrl = this.getShortUrl.bind(this);
    }

    async postShortUrl(req, res, next){
        try{
            const { url } = req.body;

            const createdShorturl = await this._service.createShorturl(url);

            res.status(200).json({ original_url: createdShorturl.url, short_url: createdShorturl.uuid });
        }catch(err){
            next(err);
        }
    }

    async getShortUrl(req, res, next){
        try{
            const { uuid } = req.params;

            const shorturl = await this._service.getShorturl(uuid);

            if(shorturl == null) return res.status(400).json({"error":"No short URL found for the given input"});
            
            res.status(200).redirect(shorturl.url);
        }catch(err){
            next(err);
        }
    }
}

module.exports = ShortUrl;