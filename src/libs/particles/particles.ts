import 'particles.js/particles';
import particlesConfig from './particlesjs-config.json';

export function renderBannerParticles(entry?: string) {
    // @ts-ignore
    particlesJS(entry, particlesConfig);
}
