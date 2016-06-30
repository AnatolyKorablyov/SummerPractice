goog.provide("ispring.sample.Bar2");

goog.require("ispring.sample.Bar");
goog.require("ispring.sample.IBar");

goog.scope(function() {

    var Bar = ispring.sample.Bar;
    var IBar = ispring.sample.IBar;

    /**
     * @constructor
     * @extends {ispring.sample.Bar}
     * @implements {ispring.sample.IBar}
     */
    ispring.sample.Bar2 = goog.defineClass(Bar, {
        constructor: function() {
        },

        /**
         * @override
         * @param {string} param1
         * @param {string} param2
         */
        printValues: function(param1, param2) {
            console.log("param1=", param1, "param2=", param2);
            
            goog.base(this, "printValues", "3", "4"); // вызов родительского метода
        }
    });
});

