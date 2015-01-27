var template=
{
	"timeline_year":"<a href='#' class='scrubber_year current'>{{year}}</a>",
	"timeline_month":"<a href='#' class='scrubber_month'>{{month}}</a>",
	"content_year":"<div class='content_year'>{{year}}</div>",
	"content_month":"<div class='content_month'>{{month}}</div>",
	"content_item":'<div class="content_item" id="{{dir}}" style="{{first}}">\
	 			<div class="content_item_icon_arrow"></div>\
	 			<div class="content_item_icon_dot">\
	 					<div class="content_item_icon_dot_child"></div>\
	 			</div>\
	 			<div class="content_item_head">\
	 				<div class="content_item_head_title">\
	 					<div class="content_item_head_title_lunar">前<br>&nbsp&nbsp&nbsp&nbsp端</div>\
	 					{{date}}\
	 				</div>\
	 				<div class="content_item_head_intro">\
	 					{{intro}}\
	 				</div>\
	 			</div>\
	 			<div class="content_item_media">\
	 				点点我看更多...<i class="i-bg"></i>\
	 			</div>\
	 		</div>',

	"content_alert":"<div class='form Hide'>\
          <div class='title'>\
              <h3 class='subtitle'>记录前端点滴</h3>\
              <button class='x-btn'>×</button>\
          </div>\
          <div class='main'>\
              <h4 class='main-title'>今天学了神马：</h4>\
              <div class='study'>\
                {{study}}\
              </div>\
              <h4 class='main-title'>今天做了神马：</h4>\
              <div class='done'>\
               {{done}}\
              </div>\
              <h4 class='main-title'>来展现哈东东：</h4>\
              <div class='show'>\
                {{show}}\
              </div>\
          </div>\
          <div class='footer'>\
              <a class='closebtn'>Close</a>\
          </div>\
      </div>"
}