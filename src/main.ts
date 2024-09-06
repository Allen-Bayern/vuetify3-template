import { createApp } from 'vue';
import App from './App.vue';
import { plugins } from './plugins';
import '@/assets/styles/scss/_global-conf.scss';

function main() {
    return plugins.reduce((app, plugin) => app.use(plugin), createApp(App)).mount('#app');
}

main();
