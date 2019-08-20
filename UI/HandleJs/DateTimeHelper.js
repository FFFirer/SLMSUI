$("#test").datepicker({
    format: 'yyyy.mm',  //显示格式可为yyyymm/yyyy-mm-dd/yyyy.mm.dd
	weekStart: 1,  	//0-周日,6-周六 。默认为0
	autoclose: true,  
	startView: 3,  	//打开时显示的视图。0-'hour' 1-'day' 2-'month' 3-'year' 4-'decade' 
	minView: 3,  	//最小时间视图。默认0-'hour'
	initialDate: new Date(),	//初始化日期.默认new Date()当前日期
	forceParse: false,  	//当输入非格式化日期时，强制格式化。默认true
	bootcssVer:3,	//显示向左向右的箭头
	language: 'zh-CN' //语言
})