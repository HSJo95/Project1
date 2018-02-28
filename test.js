var MongoClient = require('mongodb').MongoClient;

module.exports = function (ctx, done) { 
	MongoClient.connect(ctx.data.MONGO_URL, function (err, db) {
	    if(err) return done(err);
            var dbo = db.db("data_N1_916");
            var myobj = { "Light2" : "ON" };
            dbo.collection("from_March").insertOne(myobj, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              db.close();
            });
	});
};
