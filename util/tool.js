(function()
{
	Tool=function()
	{
		
	}
	Tool.prototype.init=function(datalist)
	{
		var _this = this;
		var objdata=_this.buildData(datalist);
		var menuData = _this.insertDataToMenu(objdata);
        var contentData=_this.insertDataToContent(objdata);
		$('.scrubber').append(menuData);
		$('.content').append(contentData);
	}
	Tool.prototype.buildData=function(datalist)
	{
		var obj={}; //{ year: { month : [ item ,item ] } }
		var jsonString;
		for(var i=0;i<datalist.length;i++)
		{
			var date = new Date(datalist[i].date);
			var year  = date.getFullYear();
            var month = date.getMonth()+1;
            var item = datalist[i];
            if(!obj[year])
            {
            	obj[year]={};
            }
            if(!obj[year][month])
            {
            	obj[year][month]=[];
            }
            obj[year][month].push(item);
		}
		console.log(obj);
		return obj;
	}

	Tool.prototype.insertDataToMenu=function(dataobj)
	{
		var yearList=[];
		for(var year in dataobj)
		{
			var monthList=[];
			var objyear={};
			objyear["year"]=year;
			var yeartemplate=template.timeline_year;
			var viewyear = Mustache.render(yeartemplate, objyear); 
			for(var month in dataobj[year])
			{
				var objmonth={};
				objmonth['month']=month+'月';
				var monthtemplate=template.timeline_month;
				var viewmonth = Mustache.render(monthtemplate, objmonth);  
				monthList.unshift(viewmonth);
			}
			yearList.unshift(monthList.join(""));
			yearList.unshift(viewyear);
		}
		return yearList.join("");
	}
	Tool.prototype.insertDataToContent=function(dataobj)
	{
		var yearList=[];
		for(var year in dataobj)
		{
			var objyear={};
			objyear["year"]=year;
			var yeartemplate=template.content_year;
			var viewyear = Mustache.render(yeartemplate, objyear);
			var isLeft=1;
			for(var month in dataobj[year])
			{
				var objmonth={};
				objmonth['month']=month+'月';
				var monthtemplate=template.content_month;
				var viewmonth = Mustache.render(monthtemplate, objmonth);
				/*var isFirst=true;*/
				for(var i=dataobj[year][month].length-1;i>=0;i--)
				{
					var contentobj={};
					isLeft=isLeft ^ 1;
					contentobj['dir']=isLeft?'right':'left';
					if(i==0)
					{
						contentobj['first']='margin-top: -20px;';
					}
					contentobj['date']=dataobj[year][month][i].date;
					contentobj['intro']=dataobj[year][month][i].intro;
					contentobj['study']=dataobj[year][month][i].study;
					contentobj['done']=dataobj[year][month][i].done;
					var datetemplate=template.content_item;
					var alertemplate=template.content_alert;
					var viewcontent = Mustache.render(datetemplate, contentobj);
					var alertcontent = Mustache.render(alertemplate, contentobj);
					yearList.unshift(alertcontent); 
					yearList.unshift(viewcontent); 
					/*isFirst=false;*/
				}
				yearList.unshift(viewmonth); 
			}
			yearList.unshift(viewyear); 
		}
	    return yearList.join('');
	}
})()