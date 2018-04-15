var error = require('../util/error');

module.exports = {
	getQualityAuthData:function(req, res, next){
		var cpbh = req.query.cpbh;
		if(!cpbh){
			res.status(200).json({
				isSuccess:false,
				message:'缺少产品编号'
			})
		}
		else{
			req.db.query(
				"select * from T2_3_1 where yangpin_xh='"+cpbh+"'",
				(err, result) => {
					if(err){
						console.log(err);
						return next(error(500, err));
					}else{
						console.log(result);
						res.status(200).json({
							isSuccess:true,
							message:'操作成功',
							data:result.recordset
						})
					}
				}
			)
		}
			
	}
}

