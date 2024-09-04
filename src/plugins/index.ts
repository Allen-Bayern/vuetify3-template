import { createVuetify } from 'vuetify';
import { md2 as blueprint } from 'vuetify/blueprints';
import MomentUtils from '@date-io/moment';
import { globalLocale as locale } from '@/utils';
import { router } from '@/router';
import { pinia } from '@/store';

import type { Plugin } from 'vue';

/** Plugins used by this Vue application are exported here */
export const plugins: Plugin[] = [
    router,
    pinia,
    // Vuetify plugin
    createVuetify({
        blueprint,
        date: { adapter: new MomentUtils({ locale }) },
    }),
];
