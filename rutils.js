/**
 * rutils.js - a grab bag of odds and ends for prototyping in web pages and components.
 * @author R. S. Doiel, <rsdoiel@gmail.com>
 */
/*jslint browser: true, indent: 4 */
/*global console */
(function (window, document) {
    "use strict";
  
    function urlSearchParams(url_as_string) {
        var url = new window.URL(url_as_string),
            query_string = "",
            raw_pair = "",
            pair = [],
            key = "",
            value = "",
            i = 0,
            fields = [],
            key_values = {};
    
        if (url.search !== "" && url.search.indexOf('?') === 0) {
            query_string = url.search.substr('1');
            if (query_string.indexOf('&') !== -1) {
                fields = query_string.split('&');
            } else {
                fields = [query_string];
            }
            for (i = 0; i < fields.length; i += 1) {
                raw_pair = fields[i];
                if (raw_pair.indexOf('=') !== -1) {
                    pair = raw_pair.split('=', 2);
                    if (pair.length === 2) {
                        key = decodeURIComponent(pair[0]);
                        value = decodeURIComponent(pair[1]);
                        key_values[key] = value;
                    }
                }
            }
        }
        return key_values;
    }
   
   
    if (window.RUTIL === undefined) {
        window.RUTIL = {
            urlSearchParams: urlSearchParams
        };
    }
}(window, document));
