const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'notes'), (err) =>{
//     if (err) throw Error(err)


//     console.log("folder is created")
// })


// fs.writeFile(path.join(__dirname, 'notes', 'new.txt'), 'file is read', err =>{
//     if (err) throw Error(err)
//     console.log('file is created')
// })



// fs.readFile(path.join(__dirname, 'notes', 'new.txt'),
// 'utf-8',
// (err, msg) => {

//     if (err) throw Error(err)

//     console.log(msg)
// })

fs.rename(
    path.join(__dirname, 'notes', 'new.txt'), 
    path.join(__dirname, 'notes', 'new2.txt'),
    err => {
        if (err) throw err
        console.log("file name is changed")
    }
    )