import apiFactory from './factory';

export function getPage(url) {
    return apiFactory.get(url);
}