const expression = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
const regex = new RegExp(expression);

const UrlModel = require('../../models/Url');


class ShorturlService{
    constructor(){
        this._Url = UrlModel;

        this._regex = regex;
    }

    async createShorturl(url){
        if(url.match(this._regex) == null){
            return res.json({ error: 'invalid url' });
        }

        const urlFound = await this._Url.findOne({url});

        if(urlFound) return urlFound;

        const latestUrl = await this._Url.find().sort({uuid: -1}).limit(1);

        let createUrl;

        if(latestUrl.length < 1){
            createUrl = new this._Url({
                url,
                uuid: 1
            })
        }else{
            createUrl = new this._Url({
                url,
                uuid: latestUrl[0].uuid + 1
            })
        }

        const createdShorturl = await createUrl.save();

        return createdShorturl;
    }

    async getShorturl(uuid){
        const shorturl = await this._Url.findOne({uuid});

        return shorturl;
    }
}

module.exports = ShorturlService;