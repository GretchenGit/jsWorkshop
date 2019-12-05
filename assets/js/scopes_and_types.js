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

    // DECLARATIONS

    let number = 42,
        sentence = 'Hallo Welt',
        truth = true,
        myArray = ['1', '2', '3', 1, 2, 3],
        myObject = {
            objectkey1: 'Hallo Welt 2'
        },
        aFunction = function () {};

    // FUNCTIONS

    /**
     * _log logs name, type and value of a variable into console
     * @param {string} elementName 
     * @param {*} element 
     */
    function _log(elementName, element) {
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
            _log('zahl', number);
            _log('satz', sentence);
            _log('wahrheit', truth);
            _log('meinArray', myArray);
            _log('meinObject', myObject.objectkey1);
            _log('eineFunktion', aFunction);
        } catch (error) {
            console.log(error);
        }

    }

    /**
     * this function is without function right now
     */
    function _addNavigation() {}


    /**
     * _getType gets type of checkedObject including arrays
     */
    function _getType(checkedObject) {
        try {
            if (Array.isArray(checkedObject)) return 'array';
            return typeof (checkedObject);
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * encapsulates all functions from globally access
     */
    function _main() {
        try {
            // the modules own main routine
            _logCalls();

            // enable a global accessability from window
            window.tools = {} || window.tools;
            window.tools._log = _log;
            window.tools._addNavigation = _addNavigation;
        } catch (error) {
            console.log(error);
        }

    }

    // CONTROLS

    window.onload = function () {
        _main();
    };

})()