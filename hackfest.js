const Amazing = require('./Amazing');

function main(user) {
    const isAmazing = new Amazing(user);
    return isAmazing ? `${user} is amazing` : `${user} is not amazing`;
}


main(args);
