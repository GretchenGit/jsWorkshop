/** Scopes And Types
 *
 * @desc Erste Übung Javascriptkurs
 *
 * @package Webapplication
 * @module scopes_and_types
 * @author Silke <silke.rappelt@autark.com>
 * @version v2.0.0
 * @since 2019-11-28
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Silke Rappelt, Cassel
 */

!(function () {
    'use strict';

    // DECLARATION
    let number = 42,
        sentence = 'Hallo Welt',
        truth = true,
        myArray = ['1', '2', '3', 1, 2, 3],
        myObject = {
            objectkey1: 'Hallo Welt 2'
        },
        aFunction = function () {};

    // FUNCTION
    /**
     * Die Funktion log schreibt den Variablennamen, den Typ und den Wert in die Konsole
     * @param {string} elementName 
     * @param {*} element 
     */
    function log(elementName, element) {
        try {
            let output = elementName + ' { ' + _getType(element) + ' }: ' + element;
            console.log(output);
        } catch (error) {
            console.log(error);
        }
    };

    /**
     * provides the objects
     */
    function _logCalls() {
        try {
            log('zahl', number);
            log('satz', sentence);
            log('wahrheit', truth);
            log('meinArray', myArray);
            log('meinObject', myObject.objectkey1);
            log('eineFunktion', aFunction);
        } catch (error) {
            console.log(error);
        }

    }

    /**
     * this function is without function right now
     */
    function _addNavigation() {}


    /**
     * this function gets type of checkedObject including arrays
     */
    function _getType(checkedObject) {
        try {
            if (Array.isArray(checkedObject)) return 'array';
            return typeof (checkedObject);
        } catch (error) {
            console.log(error);
        }
    }

    function _main() {
        try {
            // the modules own main routine
            _logCalls();

            // enable a global accessability from window
            window.tools = {} || window.tools;
            window.tools.log = log;
            window.tools._addNavigation = _addNavigation;
        } catch (error) {
            console.log(error);
        }

    }

    // CONTROL
    window.onload = function () {
        _main();
    };

})()