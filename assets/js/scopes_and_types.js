/** 
 *
 *  @desc Erste Übung Javascriptkurs
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
    let count = 42,
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
     * @param {*} elementName: string
     * @param {*} element 
     */
    function log(elementName, element) {
        let ausgabe = elementName + ' { ' + typeof (element) + ' }: ' + element
        console.log(ausgabe);
    };

    function _logCalls() {
        log('zahl', count);
        log('satz', sentence);
        log('wahrheit', truth);
        log('meinArray', myArray);
        log('meinObject', myObject.objectkey1);
        log('eineFunktion', aFunction);
    }

    function _main() {
        // Zugriff aus globalen Kontext ermöglichen
        _logCalls();
        window.Autark = {} || window.Autark;
        window.Autark.log = log;
    }

    // CONTROL
    window.onload(_main());

})()