import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

    actions: {
        changeFont(font) {
            this.get('onFontSelected')(font)
        }
    }
});