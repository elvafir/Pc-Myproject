(function()
{
	function BoyMove()
	{
		this.iboy=$('div.iboy');
	}
	BoyMove.prototype.initMove=function()
	{
		var that=this;
		that.iboy.find('img:first').removeClass('Hide');
	}
	BoyMove.prototype.Move = function()
	{
		console.log('enter');
		var  that = this;
		var count = that.iboy.find('img').length;
		for(var i=0;i<count;i++)
		{
			var ele = that.iboy.find('img')[i];
			var index = i;
			if(!$(ele).hasClass('Hide'))
			{
				console.log('enterenter');
				$(ele).addClass("Hide");
				$(that.iboy.find('img')[(index+1)%4]).removeClass('Hide');
				break;
			}
		}
		
	}

	$(document).ready(function($) {
		var boy = new BoyMove();
		boy.initMove();
		console.log(boy);
		setInterval(function(){
			boy.Move();
		},400);
	});
})()