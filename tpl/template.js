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
	 			<div class="content_item_media">...</div>\
	 			<div class="content_item_footer">...</div>\
	 		</div>'
}