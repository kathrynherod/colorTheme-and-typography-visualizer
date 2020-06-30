import Component from '@ember/component';

export default Component.extend({

    actions: {
        changeFont(font) {
            this.get('onFontSelected')(font)
        }
    }
});