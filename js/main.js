(function()
{
	function ShowTip()
	{
		this.tipdiv=$('div.maininfo');
		this.bardiv=$('div.barinfo');
		this.imagediv=$('ul.imagelist');
		this.textdiv=$('ul.textlist');
	}

	ShowTip.prototype.bindEvent=function()
	{
		var that = this;
		
		that.tipdiv.on('mouseover','div',ShowInfos);
		that.tipdiv.on('mouseleave','div',HideInfos);
		that.tipdiv.on('click','div',DetailInfos);

		that.bardiv.on('mouseover','li',ShowSubMenu);
		that.bardiv.on('mouseleave','li',HideSubMenu);

		that.imagediv.on('mouseover','li',ShowTextMenu);
		that.bardiv.on('click','a',LinkContent);

		function ShowTextMenu()
		{
			var _this = this;
			var imgdata = $(_this).attr('image-data');
			imgdata='.'+imgdata;
			console.log(_this.textdiv);
			that.textdiv.find('li').each(function(i)
			{
				var _that = this;
				if(!$(_that).hasClass('Hide'))
				{
					$(_that).addClass('Hide');
				}
			});
			$(imgdata).removeClass('Hide');
			
		}
		function HideTextMenu()
		{
			var _this = this;
			var imgdata = $(_this).attr('image-data');
			imgdata='.'+imgdata;
			$(imgdata).addClass('Hide');
		}
		function ShowSubMenu()
		{
			var _this = this;
			$(_this).find('dl').removeClass('Hide');

		}
		function HideSubMenu()
		{
			var _this = this;
			$(_this).find('dl').addClass('Hide');
		}
		function LinkContent()
		{
			var _this = this;
			console.log($(_this).closest('dl'));
			$(_this).closest('dl').addClass('Hide');
		}
		function DetailInfos()
		{
			var _this=this;
			var targetValue = $(_this).attr('data-main');
			if(targetValue=='Echart')
			{
				$('div.subcontent').removeClass('Hide');
				var leftposition = ($(window).width()-$('div.subcontent').width())/2;
				$('div.subcontent').css(
					{
						"left":leftposition,
						"-webkit-animation-name":"UpPage",
						"-webkit-animation-duration": "3s",
     					"-webkit-animation-timing-function": "linear",
     					"-webkit-animation-fill-mode": "forwards"

					});
			}
			else if(targetValue=='D3')
			{
				alert('D3');
			}
			else if(targetValue=='Mapchina')
			{
				alert('Mapchina');
			}
		}
		function ShowInfos()
		{
			var _this=this;
			var targetValue = $(_this).attr('data-main');
			if(targetValue=='Echart')
			{
				addStyle(_this);
			}
			else if(targetValue=='D3')
			{
				addStyle(_this);
			}
			else if(targetValue=='Mapchina')
			{
				addStyle(_this);
			}
		}

		function HideInfos()
		{
			var _this=this;
			var targetValue = $(event.target).attr('data-main');
			if(targetValue=='Echart')
			{
				restoreStyle(_this);
			}
			else if(targetValue=='D3')
			{
				restoreStyle(_this);
			}
			else if(targetValue=='Mapchina')
			{
				restoreStyle(_this);
			}
		}

		function addStyle(ele)
		{
			
			$(ele).find('a').addClass("Hide");
			$(ele).find('p').removeClass('Hide').addClass('showinfo');
			$(ele).css({'background-color':'rgba(146, 82, 160, 0.5)','color':'white'});
		}

		function restoreStyle(ele)
		{
			$(ele).find('a').removeClass("Hide");
			$(ele).find('p').removeClass('showinfo').addClass('Hide');
			$(ele).css({'background-color':'rgba(194, 17, 232, 0.6)','color':'white'});
		}
	}

	$(document).ready(function($) {
		// Stuff to do as soon as the DOM is ready;
		var showtip = new ShowTip();
		showtip.bindEvent();
	});
})()