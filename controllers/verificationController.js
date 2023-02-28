const db = require('../utils/database');


exports.verifyBundle = (req ,res) => {
    console.log(req.params.bundleName);
    
    db.execute('SELECT * FROM bundles WHERE bundleName=?', [req.params.bundleName]).then(([rows, fieldData]) => {
        if(rows.length > 0)
        {
            res.status(200).json({
                code: 200,
                bundleMessage: rows[0].bundleMessage,
                bundleOS: rows[0].bundleOS,
                bundleName: rows[0].bundleName,
            })
        }
        else
        {
            res.status(200).json({
                code: 201,
                message: "The Bundle has not been found in the database",
            })
        }
    });
    
}



exports.postBundle = (req, res) => {
    db.execute('INSERT INTO bundles (bundleName, bundleOS, bundleMessage) VALUES (?, ?, ?)', [req.body.bundleName, req.body.bundleOS, req.body.bundleMessage]).then(([rows, fieldData]) => {
        res.status(200).json({
            code: 200,
            message: "The Bundle has been posted successfully to the Database",
        })
    }).catch((error) => {
        res.status(201).json({
            code: 201,
            message: "There was an error Adding your bundle in the database"
        })
    })
}