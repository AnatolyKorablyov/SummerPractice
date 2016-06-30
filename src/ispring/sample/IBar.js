goog.provide("ispring.sample.IBar");

/**
 * @interface
 */
ispring.sample.IBar = function() {};
ispring.sample.IBar.prototype = {
    /**
     * @param {string} param1
     * @param {string} param2
     */
    printValues: goog.abstractMethod
};
