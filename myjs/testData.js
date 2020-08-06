function setID(){
	var numArr = ['A','0','B','1','C','2','D','3','E','4','F','5','G','6','H','7','I','8','J','9',
	'K','0','L','1','M','2','N','3','O','4','P','5','Q','6','R','7','S','8','T','9','U','1','V','2','W','3','X','4','Y','5','Z'];
	var longs = ''
	for(var j=0;j<3;j++){
		var sorts = '';
		for(var i=0;i<4;i++){
			var n = Math.floor(Math.random() * numArr.length);
			sorts += numArr[n];
		}
		longs += sorts;
	}
	return longs;
}
function getName(){
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
	var ns = Math.floor(Math.random() * 2) + 2;
	for(var i=1;i<=ns;i++){
		var n = Math.floor(Math.random() * len);
		var ne = allStr.substring(n, (n + 1));
		name += ne;
	}
	return name;
}
function getNations(){
	var str = "汉族、满族、蒙古族、回族、藏族、维吾尔族、苗族、彝族、壮族、布依族、侗族、瑶族、白族、土家族、哈尼族、哈萨克族、傣族、黎族、傈僳族、佤族、畲族、高山族、拉祜族、水族、东乡族、纳西族、景颇族、柯尔克孜族、土族、达斡尔族、"
			+ "仫佬族、羌族、布朗族、撒拉族、毛南族、仡佬族、锡伯族、阿昌族、普米族、朝鲜族、塔吉克族、怒族、乌孜别克族、俄罗斯族、鄂温克族、德昂族、保安族、裕固族、京族、塔塔尔族、独龙族、鄂伦春族、赫哲族、门巴族、珞巴族、基诺族";
	var nations = str.split("、");
	var n = Math.floor(Math.random() * nations.length);
	
	return nations[n];
}
function getPrevice(){
	var prce = "北京市（京）、天津市（津）、上海市（沪）、重庆市（渝）、江苏省（苏）、浙江省（浙）、"
			+ "湖北省（鄂）、河北省（冀）、河南省（豫）、云南省（云）、辽宁省（辽）、吉林省（吉）、"
			+ "黑龙江省（黑）、湖南省（湘）、安徽省（皖）、山东省（鲁）、新疆维吾尔（新）、江西省（赣）、"
			+ "广西壮族（桂）、甘肃省（甘）、山西省（晋）、内蒙古（蒙）、陕西省（陕）、福建省（闽）、"
			+ "贵州省（贵）、广东省（粤）、青海省（青）、西藏（藏）、四川省（川）、宁夏回族（宁）、海南省（琼）、台湾省（台）";
	var previce = prce.split("、");
	var n = Math.floor(Math.random() * previce.length);
	
	return previce[n];
}
function getPhoneNum(){
	var phone = "1";
	var n = Math.floor(Math.random() * 6) + 3;
	phone += n;
	for(var i=1;i <= 10;i++){
		var n = Math.floor(Math.random() * 10);
		phone += n;
	}
	return phone;
}
export default function getArrData(){
	var jsonArr = [];
	for(var i=0;i<50;i++){
		var data = {
			"id": setID(),
			"name": getName(),
			"sex": (Math.floor(Math.random() * 2) + 1),
			"age": (Math.floor(Math.random() * 21) + 20),
			"nations": getNations(),
			"previce": getPrevice(),
			"phone": getPhoneNum()
		};
		jsonArr.push(data);
	}
	return jsonArr;
}
