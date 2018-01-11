function run(url){
	mui.openWindow({
	    url:url,
	    id:url,
	    styles:{
	      top:'0px',//新页面顶部位置
	      bottom:'0px',//新页面底部位置
	    },
	    waiting:{
	      title:'加载中...',//等待对话框上显示的提示内容
	    }
	})
}