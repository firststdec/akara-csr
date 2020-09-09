const Path = require('path')
const fs = require('fs')

const viewPath = 'src/pug/pages'
// const replaceArrObj = [
//   {
//     replaceOf: viewPath + '/',
//     replaceWith: '',
//   },
//   {
//     replaceOf: 'pug',
//     replaceWith: 'html',
//   }
// ]

const getFileName = function (filePath, arr) {
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      filePath = filePath.replace(arr[i].replaceOf, arr[i].replaceWith)
    }

    return filePath
  }
}

const getFilesSync = function(dir, filelist) {
  const files = fs.readdirSync(dir)

  filelist = filelist || []

  files.forEach(function (file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = getFilesSync(dir + '/' + file, filelist)
    }
    else {
      if (file.charAt(0) !== '_') {
        const pathName = dir + '/' + file

        const filename = getFileName(pathName, [
          {
            replaceOf: viewPath + '/',
            replaceWith: '',
          },
          {
            replaceOf: 'pug',
            replaceWith: 'html',
          }
        ])

        filelist.push({
          filename: filename,
          template: pathName,
        })
      }
    }
  })

  return filelist
}

const routes = getFilesSync(viewPath)
module.exports = routes
