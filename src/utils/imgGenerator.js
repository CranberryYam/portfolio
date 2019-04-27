function getCardImageSrc(name) {
    const src = require('../images/project' + name + '.png');
    return src;
}

function getCoverImageUrl(name) {
    const src = require('../images/splash' + name + '.jpg')
    return `url(${src})`;
}

export {getCardImageSrc, getCoverImageUrl};