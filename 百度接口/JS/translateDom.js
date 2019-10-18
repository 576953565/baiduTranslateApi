/******************************************************************************
 * switchLanguages(from,to,query,all)
 *from : 指定的语言
 *to:   翻译指定的语言
 *query:需要翻译的字符串文本
 *all:  翻译完需要映射到的对象
 * 
 * 
 * 
 * @版本:1.0
 * @修改时间:2019/10/18
 *
 *****************************************************************************/
function switchLanguages(from,to,query,all){
	var appid  = "20191018000342500";
	var salt = "1435660288";
	var key = "XZstNKy8NF63lxLKfo6J"
	var sign=MD5(appid+query+salt+key)
	$.ajax({
		url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
		type: 'get',
		dataType: 'jsonp',
		data: {
			q: query,
			appid: appid,
			salt: salt,
			from: from,
			to: to,
			sign: sign
		},
		success: function (data) {
			console.log(data)
			if(data.to === "zh"){
				var chData = data.trans_result[0].src;
				chData = chData.split('\n')
				for (var i=0;i<chData.length;i++) {
					all[i].innerHTML = chData[i]
				}
			}else{
				for (var i=0;i<data.trans_result.length;i++) {
					all[i].innerHTML = data.trans_result[i].dst
				}
			}
			
		} 
	});
}