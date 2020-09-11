/**
 * {"code":"00000","msg":"请求成功","data":[{"procId":"9Y6Ain5iHswEiRAkyqb","title":"GZ1598506745397","status":"completed","realityCompletedTime":1598506874324,"accountabilityDept":"012","accountabilityDeptName":"桑洋一级单位","refAlarm":null,"refAlarmName":null,"refAlarmCode":null,"troubleId":"5f4746f9c5288b00068f1306","troubleName":"GZ1598506745397","troubleCode":"GZ1598506745397","deviceId":"s29kIqCaYH0pzESkXrH","deviceName":"ZLH四级区域智慧杆_A028","deviceType":"D002","equipmentType":"E005","equipmentName":"张龙海四级区域摄像头_A028","deviceAreaId":"6nBJWimkKHutx62lgTd","deviceAreaName":"ZLH四级区域","deviceAreaCode":"013001001001","assign":"SOE3jpDEpno1X6fY1Nl","assignName":"桑洋01","refAlarmFaultName":null,"procResourceType":null,"dataResourceType":"2","dataResourceName":"GZ1598506745397"},{"procId":"HlCuIUgsV8Kjk2uQgVY","title":"GZ1598496408324","status":"completed","realityCompletedTime":1598505344720,"accountabilityDept":"012","accountabilityDeptName":"桑洋一级单位","refAlarm":null,"refAlarmName":null,"refAlarmCode":null,"troubleId":"5f471e98c5288b00068f12fd","troubleName":"GZ1598496408324","troubleCode":"GZ1598496408324","deviceId":"WsKo2CsH4e5qmA6P8Yh","deviceName":"ZLH四级区域智慧杆_A031","deviceType":"D002","equipmentType":"E005","equipmentName":"张龙海四级区域摄像头_A031","deviceAreaId":"6nBJWimkKHutx62lgTd","deviceAreaName":"ZLH四级区域","deviceAreaCode":"013001001001","assign":"SOE3jpDEpno1X6fY1Nl","assignName":"桑洋01","refAlarmFaultName":null,"procResourceType":null,"dataResourceType":"2","dataResourceName":"GZ1598496408324"},{"procId":"LquhwXezfPBazH7ygc2","title":"XZ67724200826A","status":"completed","realityCompletedTime":1598599215870,"accountabilityDept":"010001001001","accountabilityDeptName":"ZLH四级单位","refAlarm":"5f462a72c5288b0006337231","refAlarmName":"闪光灯异常","refAlarmCode":"flashAbnormal","troubleId":null,"troubleName":null,"troubleCode":null,"deviceId":"8RfQeGdoOcqzIUQs2AT","deviceName":"ZLH四级区域智慧杆_A037","deviceType":"D002","equipmentType":"E005","equipmentName":"张龙海四级区域摄像头_A037","deviceAreaId":"6nBJWimkKHutx62lgTd","deviceAreaName":"ZLH四级区域","deviceAreaCode":"013001001001","assign":"8yj14dfIqDT1IwdvINI","assignName":"whdtesttwo","refAlarmFaultName":null,"procResourceType":null,"dataResourceType":"1","dataResourceName":"闪光灯异常"},{"procId":"py9KKSNJSCk7wY9EDBe","title":"XZ66365200826A","status":"completed","realityCompletedTime":1598599244162,"accountabilityDept":"010001001001","accountabilityDeptName":"ZLH四级单位","refAlarm":"5f462a72c5288b000633722e","refAlarmName":"内存过高","refAlarmCode":"memoryTooHigh","troubleId":null,"troubleName":null,"troubleCode":null,"deviceId":"W5TlZYAdhcR9qRC7YFT","deviceName":"ZLH四级区域智慧杆_A055","deviceType":"D002","equipmentType":"E001","equipmentName":"张龙海四级区域网关_A055","deviceAreaId":"6nBJWimkKHutx62lgTd","deviceAreaName":"ZLH四级区域","deviceAreaCode":"013001001001","assign":"8yj14dfIqDT1IwdvINI","assignName":"whdtesttwo","refAlarmFaultName":null,"procResourceType":null,"dataResourceType":"1","dataResourceName":"内存过高"}],"pageNum":1,"totalPage":1,"totalCount":4,"size":10}
 * */

function setId() {
	var s = [];
	var hexDigits = "0123456789abcdef";
	for (var i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	s[8] = s[13] = s[18] = s[23] = "-";

	var uuid = s.join("");
	return uuid;
}
function setTitle(n){
	var numArr = ['A','0','B','1','C','2','D','3','E','4','F','5','G','6','H','7','I','8','J','9',
	'K','0','L','1','M','2','N','3','O','4','P','5','Q','6','R','7','S','8','T','9','U','1','V','2','W','3','X','4','Y','5','Z'];
	var longs = ''
	for(var j=0;j<n;j++){
		var n = Math.floor(Math.random() * numArr.length);
		longs += numArr[n];
	}
	return longs;
}
function setStatus() {
	var arr = ['assigned','pending','processing','completed','singleBack','turnProcess'];
	return arr[Math.floor(Math.random() * arr.length)];
}
function setName(max) {
	// '\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16)
	var allStr = "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎冉宰郦雍"
			   + "鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄广禄阙东"
			   + "和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闵席季麻强贾路娄危江童颜郭上官欧阳"
			   + "梅盛林刁钟徐邱骆高夏蔡田樊胡凌霍虞万支柯昝管卢莫经房裘缪干解应宗丁宣贲邓郁单杭洪包诸左石崔吉钮龚年爱阳佟"
			   + "荀羊於惠甄曲家封芮羿储靳汲邴糜松井段富巫乌焦巴弓牧隗山谷车侯宓蓬全郗班仰秋仲伊宫宁仇栾暴甘钭厉戎伯赏南宫"
			   + "祖武符刘景詹束龙叶幸司韶郜黎蓟薄印宿白怀蒲邰从鄂索咸籍赖卓蔺屠蒙池乔阴鬱胥能苍双闻莘党翟谭贡劳逄姬申扶堵"
			   + "卻璩桑桂濮牛寿通边扈燕冀郏浦尚农温别庄晏柴瞿阎充慕连茹习宦艾鱼容向古易慎戈廖庾终暨居衡步都耿满弘匡国文寇"
			   + "欧殳沃利蔚越夔隆师巩厍聂晁勾敖融冷訾辛阚那简饶空曾毋沙乜养鞠须丰巢关蒯相查后荆红游竺权逯盖益桓公万俟司马"
			   + "夏侯诸葛闻人东方赫连皇甫尉迟公羊澹台公冶宗政濮阳淳于单于太叔申屠公孙仲孙轩辕令狐钟离宇文长孙慕容墨哈谯笪"
			   + "鲜于闾丘司徒司空丌官司寇仉督子车颛孙端木巫马公西漆雕乐正壤驷公良拓跋夹谷宰父谷梁晋楚闫法汝鄢涂钦商牟佘佴"
			   + "段干百里东郭南门呼延归海羊舌微生岳帅缑亢况郈有琴梁丘左丘东门西门第五言福百家姓终程嵇邢滑裴陆荣翁池管庄席";
	var len = allStr.length;
	var name = '';
	var ns = Math.floor(Math.random() * (max - 2)) + 2;
	for(var i=1;i<=ns;i++){
		var n = Math.floor(Math.random() * len);
		var ne = allStr.substring(n, (n + 1));
		name += ne;
	}
	return name;
}

function setType(type) {
	var etype = ['E001','E002','E003','E004','E005'];
	var dtype = ['001', 'D002', 'D003', '030', '060', '090', '210'];
	var code = '';
	if (type == 1) {
		code = etype[Math.floor(Math.random() * etype.length)];
	} else {
		code = dtype[Math.floor(Math.random() * dtype.length)];
	}
	return code;
}


function loadData(total) {
	var ts = (new Date()).getTime();
	var result = {
		"code":"00000",
		"msg":"请求成功",
		"data": [],
		"pageNum":1,
		"totalPage":1,
		"totalCount": total,
		"size":total
	};
	var time = 0;
	for (var i = 0; i < total; i++) {
		var data = {
			"procId": setId(),
			"title": setTitle(10),
			"status": setStatus(),
			"realityCompletedTime": (new Date()).getTime(),
			"accountabilityDept": "010001001001",
			"accountabilityDeptName": setName(6),
			"refAlarm": setId(),
			"refAlarmName": "内存过高",
			"refAlarmCode": "memoryTooHigh",
			"troubleId": null,
			"troubleName": null,
			"troubleCode": null,
			"deviceId": setTitle(10),
			"deviceName": setName(10),
			"deviceType": setType(2),
			"equipmentType": setType(1),
			"equipmentName": setName(12),
			"deviceAreaId": setId(),
			"deviceAreaName": setName(5),
			"deviceAreaCode": "013001001001",
			"assign": setId(),
			"assignName": setName(3),
			"refAlarmFaultName": null,
			"procResourceType": null,
			"dataResourceType": "1",
			"dataResourceName": "内存过高"
		};
		result.data.push(data);
		// window.setInterval(function() {});
	}
	var te = (new Date()).getTime();
	console.log((te-ts)/1000)
	return result;
}
