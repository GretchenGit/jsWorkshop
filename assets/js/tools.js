/** tools.js
 * 
 * @desc toolsfunction to create Navigation
 *
 * @package Webapplication
 * @module 
 * @author Silke Rappelt <silke.rappelt@autark.com>
 * @version v1.0.0
 * @since 2019-12-19
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Silke Rappelt, Cassel
 */

!(function () {
    'use strict';
    // DECLARATION
    // FUNCTIONS
    /** Adds new Navigation to DOM */

    function _addNavigation() {
        let header = document.createElement('header');
        let nav = document.createElement('nav');
        let ul = document.createElement('ul');

        let navArray = [{
                text: 'Home',
                link: 'index.html'
            },
            {
                text: 'Work',
                link: 'work.html'
            },
            {
                text: 'Contact',
                link: 'contact.html'
            },
            {
                text: 'Imprint',
                link: 'imprint.html'
            }
        ];
        try {
            for (let i = 0; i < navArray.length; i++) {
                let li = document.createElement('li');
                let a = document.createElement('a');
                let text = document.createTextNode(navArray[i].text)
                console.log('array link', navArray[i].link)
                console.log('array text', navArray[i].text)
                a.setAttribute('href', navArray[i].link);
                a.appendChild(text);
                li.appendChild(a);
                ul.appendChild(li);
            }

            nav.appendChild(ul);
            header.appendChild(nav);
            document.body.appendChild(header);

        } catch (error) {
            console.log('tools._addNavigation', error.message);
        }
    }

    // CONTROLS

    window.tools = {} || window.tools;
    window.tools.addNavigation = _addNavigation;

})()