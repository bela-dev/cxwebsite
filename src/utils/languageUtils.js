import de from "../assets/lang/de.json";
import en from "../assets/lang/en.json";

function getLang(key) {
    var lang = en;
    var userLang = navigator.language || navigator.userLanguage; 
    
    if(userLang.toLowerCase().includes("de")) {
        lang = de;
    }
    
    const params = key.split(".");
    var cjson = lang[params[0]];
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