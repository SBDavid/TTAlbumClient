import apiFactory from './factory';

export  function getAlbumById(user, album) {
    return apiFactory.get(`album/${album}`);
}

 