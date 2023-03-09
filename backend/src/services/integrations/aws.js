require('dotenv').config();
const AWS = require('aws-sdk');

const { randString } = require('../../util/common');
const {
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_S3_BUCKET,
    AWS_REGION,
} = process.env;

AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: AWS_REGION,
});

const S3 = new AWS.S3();

function getPutPresignUrl({ name, type, prefix }) {
    const typeArray = type.split('/');
    // eslint-disable-next-line no-magic-numbers
    const key = `${prefix}/${name}_${randString(10)}.${typeArray[1]}`;
    const params = {
        Bucket: AWS_S3_BUCKET,
        Key: key,
        // eslint-disable-next-line no-magic-numbers
        Expires: 60 * 15,
        ACL: 'public-read',
        ContentType: type,
    };
    return S3.getSignedUrlPromise('putObject', params);
}

module.exports = {
    getPutPresignUrl,
};
