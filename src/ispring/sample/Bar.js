goog.provide("ispring.sample.Bar");

goog.scope(function() {
    /**
     * @constructor
     */
    ispring.sample.Bar = goog.defineClass(null, {
        constructor: function() {
        },

        /**
         * @param {string} param1
         * @param {string} param2
         */
        printValues: function(param1, param2) {
            console.log(param1, param2)
        }
    });
});

