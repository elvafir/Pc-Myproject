(function($){
	Select = function(options)
	{
		this.selectEle = options.inputstyle;
		this.optionEle= options.showinfostyle;
		/*this.cssStyle = options.cssStyle;*/
		this.arrayOptions = data.optiondata;
		this.itemJson=[];
	}

	Select.prototype.init=function()
	{
		var _this = this;
		/*_this.initCssStyle();*/
		_this.sortOptions();
		_this.bindEvent();
	}
	Select.prototype.initCssStyle=function()
	{
		var _this = this;
		_this.selectEle[0].style.cssText(_this.cssStyle.inputstyle);
		_this.optionEle[0].style.cssText(_this.cssStyle.divstyle);
	}
	Select.prototype.bindEvent=function()
	{
		var _this=this;
		_this.selectEle.on('click',$.proxy(_this.addOptions,_this));
		_this.selectEle.on('keyup',$.proxy(_this.searchItemOption,_this));
		_this.optionEle.on('mouseleave',$.proxy(_this.hidePages,_this));
		_this.optionEle.on('click','li',$.proxy(_this.selectEleFromLi,_this));
	}
	Select.prototype.hidePages=function()
	{
		var _this=this;
		_this.optionEle.addClass('Hide');
	}
	Select.prototype.selectEleFromLi=function(event)
	{
		var _this=this;
		_this.selectEle.val($(event.target).text());
		_this.optionEle.addClass('Hide');
	}
	Select.prototype.sortOptions=function()
	{
		var _this=this;
	    _this.arrayOptions.sort(compare('value'));
		function compare(propertyName) 
		{ 
			return function (object1, object2) { 
				var value1 = object1[propertyName]; 
				var value2 = object2[propertyName]; 
				if (value2 < value1) { 
				return 1; 
				} 
				else if (value2 > value1) { 
				return -1; 
				} 
				else { 
				return 0; 
				} 
			} 
		}
	}
	Select.prototype.addOptions=function()
	{
		var _this=this;
		_this.optionEle.empty();
	    _this.itemJson.length=0;
		_this.optionEle.removeClass('Hide');
		function getOption(value,description)
		{

			var template="<li value='"+value+"'>"+description+"</li>";
			return template;
		}
		for(var i=0;i<_this.arrayOptions.length;i++)
		{
			var obj={};
			obj['optionEle']=_this.arrayOptions[i];
			_this.itemJson.push(obj);
			var optionString = getOption(_this.arrayOptions[i].value,_this.arrayOptions[i].description);
			_this.optionEle.append(optionString);
		}
		console.log(_this.itemJson);
	}
	Select.prototype.searchItemOption=function()
	{
		var _this = this;
		var searchText = _this.selectEle.val();
		var searchArray = new Array();
		_this.optionEle.empty();
	    searchWords(searchText.length);
		function searchWords(wordsize)
		{
			for(var i=0;i<_this.itemJson.length;i++)
			{
				if( _this.itemJson[i].optionEle.description.length>=wordsize)
				{
					var tempvalue = _this.itemJson[i].optionEle.description.substring(0,wordsize);
					console.log('tempvalue:'+tempvalue);
					if(searchText==tempvalue)
					{
						console.log('searchText:'+searchText);
						var template="<li value='"+_this.itemJson[i].optionEle.value+"'>"+_this.itemJson[i].optionEle.description+"</li>";
						_this.optionEle.append(template);
					}
				}
			}
		}
	}
})(jQuery)