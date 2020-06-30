
import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    brandName: 'Interceptor',
    colorScheme: 1,
    icon: 'fighter-jet',
    theme: 'light',

    fontList: computed(function() {
        return [
        {
            display: 'Abel',
            category: 'Sans-Serif',
            class: 'abel',
        }, {
            display: 'Alegreya Sans',
            category: 'Sans-Serif',
            class: 'alegreya',
        }, {
            display: 'Arimo',
            category: 'Sans-Serif',
            class: 'arimo',
        }, {
            display: 'Catamaran',
            category: 'Sans-Serif',
            class: 'catamaran',
        }, {
            display: 'Encode Sans',
            category: 'Sans-Serif',
            class: 'encode-sans',
        }, {
            display: 'Hind',
            category: 'Sans-Serif',
            class: 'hind',
        }, {
            display: 'Inter',
            category: 'Sans-Serif',
            class: 'inter',
        }, {
            display: 'Lato',
            category: 'Sans-Serif',
            class: 'lato',
        }, {
            display: 'Merriweather Sans',
            category: 'Sans-Serif',
            class: 'merriweather-sans',
        }, {
            display: 'Muli',
            category: 'Sans-Serif',
            class: 'mul',
        }, {
            display: 'News Cycle',
            category: 'Sans-Serif',
            class: 'news-cycle',
        }, {
            display: 'Noto Sans',
            category: 'Sans-Serif',
            class: 'noto-sans',
        }, {
            display: 'NTR',
            category: 'Sans-Serif',
            class: 'ntr',
        }, {
            display: 'Open Sans',
            category: 'Sans-Serif',
            class: 'open-sans',
        }, {
            display: 'Oswald',
            category: 'Sans-Serif',
            class: 'oswald',
        }, {
            display: 'Pavanam',
            category: 'Sans-Serif',
            class: 'pavanam',
        }, {
            display: 'Pontano Sans',
            category: 'Sans-Serif',
            class: 'pontano-sans',
        }, {
            display: 'Poppins',
            category: 'Sans-Serif',
            class: 'poppins',
        }, {
            display: 'Puritan',
            category: 'Sans-Serif',
            class: 'puritan',
        }, {
            display: 'Raleway',
            category: 'Sans-Serif',
            class: 'raleway',
        }, {
            display: 'Rambla',
            category: 'Sans-Serif',
            class: '',
        }, {
            display: 'Red Hat Display',
            category: 'Sans-Serif',
            class: 'red-hat-display',
        }, {
            display: 'Roboto',
            category: 'Sans-Serif',
            class: 'roboto',
        }, {
            display: 'Source Sans Pro',
            category: 'Sans-Serif',
            class: 'source-sans-pro',
        }, {
            display: 'Ubuntu Condensed',
            category: 'Sans-Serif',
            class: 'ubuntu-condensed',
        }, {
            display: 'Work Sans',
            category: 'Sans-Serif',
            class: 'work-sans',
        },
        ];
    }),

    init() {
        this._super(...arguments);

        this.set('font', this.get('fontList').findBy('class', 'roboto'));
    },

    actions: {
        onFontSelected(font) {
            this.set('font', font)
        }
    },
});