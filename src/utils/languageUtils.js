import de from "../assets/lang/de.json";

function getLang(key) {
    const params = key.split(".");
    var cjson = de[params[0]];
    var i = 1;
    while(i < params.length) {
        if(!cjson) {
            return undefined;
        }
        cjson = cjson[params[i]];
        i += 1;
    }
    return cjson;
}

export {getLang}