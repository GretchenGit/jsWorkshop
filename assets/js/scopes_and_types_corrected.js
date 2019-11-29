/** Scopes And Types
 *
 * @desc Erste Übung Javascriptkurs
 *
 * @package Webapplication
 * @module scopes_and_types
 * @author Silke <silke.rappelt@autark.com>
 * @version v1.0.0
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
        let output = elementName + ' { ' + typeof (element) + ' }: ' + element
        console.log(output);
    };

    function _logCalls() {
        log('zahl', number);
        log('satz', sentence);
        log('wahrheit', truth);
        log('meinArray', myArray);
        log('meinObject', meyObject.objectkey1);
        log('eineFunktion', aFunction);
    }

    function _main() {
        // the modules own main routine
        _logCalls();

        // enable a global accessability from window
        // ! not really neccessary for your example, but nice :-)
        window.Autark = {} || window.Autark;
        window.Autark.log = log;
    }

    // CONTROL
    window.onload = function () {
        _main();
    };

})()