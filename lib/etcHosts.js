'use strict';

var ev = require('event-stream'),
    through = require('through2'),
    fs = require('fs'),
    _ = require('lodash')

var startStr = '#box:start',
    endStr = '#box:end';


function attachData(buffer, hosts) {
    buffer.push(startStr);
    hosts.forEach(function (host) {
        buffer.push(host.ip + ' ' + host.names.join(' '));
    });
    buffer.push(endStr);
}

exports.write = function (hosts) {
    var filepath = '/etc/hosts';
    var readStream = fs.createReadStream(filepath);
    var buffer = [];
    var isStart = new RegExp(startStr);
    var isEnd = new RegExp(endStr);
    var isComment = new RegExp('^#');
    var pos = 0;

    readStream.
        pipe(ev.split()).pipe(through(function (data, enc, next) {
            var line = data.toString().trim();

            if (isStart.test(line)) {
                pos = 1;
                readStream.hasStart = true;
            }

            if (isEnd.test(line)) {
                pos = 2;
                attachData(buffer, hosts);
                readStream.hasEnd = true;
            }

            if (!isStart.test(line) && !isEnd.test(line) && pos !== 1) {
                buffer.push(data);
            }

            next();
        }));

    readStream.on('end', function (data) {
        if (readStream.hasEnd !== true) {
            attachData(buffer, hosts);
        }
        fs.writeFile(filepath, buffer.join('\n'));
    });
};

