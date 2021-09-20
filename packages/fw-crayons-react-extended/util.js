const prependFile = require('prepend-file');
 
prependFile.sync('src/components.ts', '// @ts-nocheck\n');
