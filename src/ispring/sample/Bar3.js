goog.provide("ispring.sample.Bar3");

goog.require("ispring.sample.IBar");

goog.scope(function() {

    var IBar = ispring.sample.IBar;

    /**
     * @constructor
     * @implements {ispring.sample.IBar}
     */
    ispring.sample.Bar3 = goog.defineClass(null, {
        constructor: function() {
        },

        /**
         * @param {string} param1
         * @param {string} param2
         */
        printValues: function(param1, param2) {
            console.log("bar3", "param1=", param1, "param2=", param2);
        }
    });
});

