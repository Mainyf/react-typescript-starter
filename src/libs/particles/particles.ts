import 'particles.js/particles';
import particlesConfig from './particlesjs-black-config.json';

export function renderBannerParticles(entry?: string) {
    // @ts-ignore
    particlesJS(entry, particlesConfig);
}
