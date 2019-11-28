/** 
 *
 *  @desc Erste Übung Javascriptkurs
 *
 * @package Webapplication
 * @module 
 * @author Silke <silke.rappelt@autark.com>
 * @version v1.0.0
 * @since 2019-11-28
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Silke Rappelt, Cassel
 */

!(function () {
    'use strict';
    // DECLARATION
    let zahl = 42,
        satz = 'Hallo Welt',
        wahrheit = true,
        meinArray = ['1', '2', '3', 1, 2, 3],
        meinObject = {
            objectkey1: 'Hallo Welt 2'
        },
        eineFunktion = function () {};

    // FUNCTION
    /**
     * Die Funktion log schreibt den Variablennamen, den Typ und den Wert in die Konsole
     * @param {*} elementname 
     * @param {*} element 
     */
    function log(elementname, element) {
        let ausgabe = elementname + ' { ' + typeof (element) + ' }: ' + element
        console.log(ausgabe);
    };

    function _logCalls() {
        log('zahl', zahl);
        log('satz', satz);
        log('wahrheit', wahrheit);
        log('meinArray', meinArray);
        log('meinObject', meinObject.objectkey1);
        log('eineFunktion', eineFunktion);
    }

    function _main() {
        // Zugriff aus globalen Kontext ermöglichen
        _logCalls();
        window.Autark = {} || window.Autark;
        window.Autark.log = log;
    }

    // CONTROL
    _main();

})()