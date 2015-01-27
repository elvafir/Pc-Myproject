(function($)
{
	Alert=function(option)
	{
		this.win={
			"WinWidth":$(window).width(),
			"WinHeight":$(window).height()
		};
		this.alertEle=option.alert;
		this.closeBtn=$('a.closebtn')||option.closeButton;
		this.xBtn=$('button.x-btn')||option.xButton;
	}
	Alert.prototype.initAlert = function()
	{
		var _this = this;
		_this.initOverLayer();
		_this.showAlertInfos();
		_this.bindevent();
	}
	Alert.prototype.bindevent = function()
	{
		var _this = this;
		_this.overLayer.on('click',removeLayeroutAndRestoreAlert);
		_this.closeBtn.on('click',removeLayeroutAndRestoreAlert);
		_this.xBtn.on('click',removeLayeroutAndRestoreAlert);
		function removeLayeroutAndRestoreAlert()
		{
			_this.overLayer.remove();
			_this.alertEle.addClass('Hide');
		}

	}
	Alert.prototype.initOverLayer=function()
	{
		var _this = this;
		_this.overLayer = $('<div></div>').css({
			"z-index":"100",
			"position":"fixed",
			"top":"0px",
			"background": "rgba(0, 0, 0, 0.44)",
		    "width":"100%",
			"height":"100%"}).appendTo('body');
	}
	Alert.prototype.showAlertInfos=function()
	{
		var _this=this;
		_this.alertEle.removeClass('Hide');
		var alertEleWidth = _this.alertEle.width();
		var alertEleHight = _this.alertEle.height();
		var left = (_this.win.WinWidth - alertEleWidth)/2;
		var top = (_this.win.WinHeight - alertEleHight)/2;
		_this.alertEle.css({
			"position":"fixed",
			"top":top,
			"left":left,
			"z-index":"10000"
		});
	}
})(jQuery)