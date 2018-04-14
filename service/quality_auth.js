var error = require('../util/error');

module.exports = {
	getQualityAuthData:function(req, res, next){
		req.db.query(
			'select * from T2_3_1',
			(err, result) => {
				if(err){
					console.log(err);
					return next(error(500, err));
				}else{
					res.status(200).json({
						isSuccess:true,
						message:'操作成功',
						data:result
					})
				}
			}
		)
	}
}

