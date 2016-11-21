var ftpClient = require('ftp-client'),

    config = {
        host: 'ahmed-badawy.com',
        port: 21,
        user: 'courtaks',
        password: '159357Bad'
    },
    options = {
        logging: 'basic'
    },
    client = new ftpClient(config, options);
 
client.connect(function () {
 
    client.upload(['upload-from-this-folder/**'], '/public_html/remote-folder', {
        baseDir: 'test',
        overwrite: 'older'
    }, function (result) {
        console.log(result);
    });
 
    client.download('/public_html/remote-folder', 'download-to-this-folder/', {
        overwrite: 'all'
    }, function (result) {
        console.log(result);
    });
 
});