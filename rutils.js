/**
 * rutils.js - a grab bag of odds and ends for prototyping in web pages and components.
 * @author R. S. Doiel, <rsdoiel@gmail.com>
 */
/*jslint browser: true, indent: 4 */
(function (window, document) {
  "use strict";
  
   function urlSearchParams(url_as_string) {
    var URLUtils = window.URL || window.webkitURL,
        url = new URLUtils(url_string),
        query_string,
        fields,
        key_values = {};
    
    if (url.search !== "" && url.search.indexOf('?') === 0) {
        query_string = url.search.substr('1');
        if (query_string.indexOf('&') !== -1) {
            fields = query_string.split('&');
        } else {
            fields = [query_string];
        }
        fields.foreach(function (raw_pair) {
            var pair = raw_pair.split('=', 2),
                key, value;
            
            if (pair.length === 2) {
                key = decodeURIComponent(pair[0]);
                value = decodeURIComponent(pair[1]);
                key_values[key] = value;
            }
        });
    }
    return key_values;
   }
   
   
   if (window.RUTIL === undefined) {
      window.RUTIL = {
          urlSearchParams: urlSearchParams
      };
   }
}(window, document));
