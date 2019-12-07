/** Scopes And Types
 *
 * @desc Second Excercise Javascriptcourse
 *
 * @package Webapplication
 * @module scopes_and_types
 * @author Silke <silke.rappelt@autark.com>
 * @version v2.0.0
 * @since 2019-12-05
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Silke Rappelt, Cassel
 */

!(function () {
    'use strict';
    // - - - - - - - - - -
    // Module declarations
    // - - - - - - - - - -
    // none do far

    // - - - - - - - - - -
    // Functions
    // - - - - - - - - - -
    /**
     * _log logs name, type and value of a variable into console
     * @param {string} elementName 
     * @param {*} element 
     * @return boolean
     */
    function _log(elementName, variable) {
        // ! Du kannst übergebene Werte durch einen  Defaultwert absichern.
        // ! Dann kannst mit return false für einen frühen Ausstieg sorgen. 
        // ! Das ist aber nur ein Vorschlag. Es gibt hier auch andere Wege für mehr Sicherheit.
        // ! Du kannst die Underscore-Namespaces verwenden, um lokale Variablen von anderen zu unterscheiden,
        let
            _output,
            _elementName = elementName || undefined,
            _element = element || undefined;

        if (_elementName === undefined) return false;
        if (_element === undefined) return false;

        try {
            _output = elementName + ' { ' + _getType(element) + ' }: ' + element;
            console.log(_output);
            return true;
        } catch (error) {
            console.log(error.message);
            return false;
        }

        return false;
    }

    // ! Überlegung: Ein Modul stellt Funktionen nur zur Verfügung.
    // !             Die ausführende Funktion gehört nicht mehr das Modul, 
    // !             sondern ruft von "aussen" auf. Siehe ab Zeile 111.
    // !
    // !    Dennoch: Ein try-catch wäre hier überflüssig.
    // !             Das kann die _log Funktion schon viel besser.
    // !             try-catch werden nur dort verwendet, wo Programmcode
    // !             entwickelt wurde. Catch soll einen Fehler möglichst genau abfangen.
    // /**
    //  * provides the objects
    //  */
    // function _logCalls() {
    //     try {
    //         _log('zahl', number);
    //         _log('satz', sentence);
    //         _log('wahrheit', truth);
    //         _log('meinArray', myArray);
    //         _log('meinObject', myObject.objectkey1);
    //         _log('eineFunktion', aFunction);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    /**
     * _getType gets type of checkedObject including arrays
     * @param {*} checkedObject 
     * @return string || boolean
     */
    function _getType(checkedObject) {
        let _checkedObject = checkedObject || undefined;

        if (_checkedObject === undefined) return false;

        try {
            if (Array.isArray(_checkedObject)) return 'array'
            return typeof (_checkedObject);

        } catch (error) {
            console.log("scopes_and_types._getType: ", error.message);
            return false;
        }
    }

    /**
     * this function is without function right now
     */
    function _addNavigation() {}

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
    // - - - - - - - - - -
    // The module control aka. init
    // - - - - - - - - - -
    // ! Es ist i.d.R. kein window.onload innerhalb eines Moduls nötig
    // ! denn das richtet sich nur im Speicher ein und braucht kein DOM
    _main();
    // - - - - - - - - - -


})()



// The global control
// ! Jetzt sind wir ausserhalb des Moduls.
// ! Ab hier ist ein window.onload notwendig
// ! Das tools Module wird i.d.R. ja von anderen Programmen verwendet
window.onload = function () {

    window.tools.log("eineNummer", aNumber);

    // ! window kann man auch weglassen
    tools.log("einText", aText);
    tools.log("einBool", aBool);
    tools.log("einArray", anArray);
    tools.log("einObjekt", anObject.objektKey);
    tools.log("eineFunktion", aFunction);
}