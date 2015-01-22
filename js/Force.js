(function()
{
    require.config({
            paths: {
                echarts: './ec'
            }
        });
        require(['echarts','echarts/chart/chord','echarts/chart/force'],
            function (ec) 
            {
              
    var option = 
    {
        title : {
            text: '网络拓扑关系',
            subtext: '数据百度',
            x:'right',
            y:'bottom'
        },
        tooltip : {
            trigger: 'item',
            formatter: '{a} : {b}'
        },
        toolbox: {
            show : true,
            feature : {
                restore : {show: true},
                magicType: {show: true, type: ['force', 'chord']},
                saveAsImage : {show: true}
            }
        },
        legend: {
            x: 'left',
            data:['主要节点','次要节点']
        },
        series : [
            {
                type:'force',
                 roam:true,
                name : "拓扑关系",
                ribbonType: false,
                categories : [
                    {
                        name: '主要节点'
                    },
                    {
                        name: '次要节点',
                        symbol: 'diamond'
                    }
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            textStyle: {
                                color: '#333'
                            }
                        },
                        nodeStyle : {
                            brushType : 'both',
                            borderColor : 'rgba(255,215,0,0.4)',
                            borderWidth : 1
                        }
                    },
                    emphasis: {
                        label: {
                            show: false
                            // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                        },
                        nodeStyle : {
                            //r: 30
                        },
                        linkStyle : {}
                    }
                },
                minRadius : 15,
                maxRadius : 25,
                gravity: 1.1,
                scaling: 1.2,
                draggable: true,
                linkSymbol: 'arrow',
                steps: 10,
                coolDown: 0.9,
                //preventOverlap: true,
                nodes:[
                    {
                        category:0,name: 'A',value:"A好牛逼",
                        symbol: 'image://https://github.com/favicon.ico',
                        symbolSize: 30,
                        draggable: false,
                        itemStyle: {
                            normal: {
                                label: {
                                    position: 'right',
                                    textStyle: {
                                        color: 'black'
                                    }
                                }
                            }
                        },
                        initial:[450,150],
                        fixX:true,
                        fixY:true,

                    },
                    {
                        symbol: 'image://https://github.com/favicon.ico',
                        category:0, name: 'B',value:"B好牛逼",
                        symbolSize: 30,
                        draggable: false,
                        itemStyle: {
                            normal: {
                                label: {
                                    position: 'right',
                                    textStyle: {
                                        color: 'black'
                                    }
                                }
                            }
                        },
                        initial:[950,150],
                        fixX:true,
                        fixY:true,

                    },
                    {
                        symbol: 'image://https://github.com/favicon.ico',
                        category:0, name: 'C',value:"C好牛逼",
                        symbolSize: 30,
                        draggable: true,
                        itemStyle: {
                            normal: {
                                label: {
                                    position: 'right',
                                    textStyle: {
                                        color: 'black'
                                    }
                                }
                            }
                        },
                        initial:[450,650],
                        fixX:true,
                        fixY:true,

                    },
                    {
                        symbol: 'image://https://github.com/favicon.ico',
                        category:0, name: 'D',value:"D好牛逼",
                        symbolSize: 30,
                        draggable: false,
                        itemStyle: {
                            normal: {
                                label: {
                                    position: 'right',
                                    textStyle: {
                                        color: 'black'
                                    }
                                }
                            }
                        },
                        initial:[950,650],
                        fixX:true,
                        fixY:true,

                    },
                    {
                        symbol: 'image://https://github.com/favicon.ico',
                        category:1, name: 'E',value:"E好牛逼",
                        symbolSize: 30,
                        draggable: false,
                        itemStyle: {
                            normal: {
                                label: {
                                    position: 'right',
                                    textStyle: {
                                        color: 'black'
                                    }
                                }
                            }
                        },
                        initial:[550,250],
                        fixX:true,
                        fixY:true,

                    },
                     {
                        symbol: 'image://https://github.com/favicon.ico',
                        category:1, name: 'F',value:"F好牛逼",
                        symbolSize: 30,
                        draggable: false,
                        itemStyle: {
                            normal: {
                                label: {
                                    position: 'right',
                                    textStyle: {
                                        color: 'black'
                                    }
                                }
                            }
                        },
                        initial:[850,250],
                        fixX:true,
                        fixY:true,

                    },
                    {
                        symbol: 'image://https://github.com/favicon.ico',
                        category:1, name: 'G',value:"G好牛逼",
                        symbolSize: 30,
                        draggable: false,
                        itemStyle: {
                            normal: {
                                label: {
                                    position: 'right',
                                    textStyle: {
                                        color: 'black'
                                    }
                                }
                            }
                        },
                        initial:[550,550],
                        fixX:true,
                        fixY:true,

                    },
                    {
                        symbol: 'image://https://github.com/favicon.ico',
                        category:1, name: 'H',value:"H好牛逼",
                        symbolSize: 30,
                        draggable: false,
                        itemStyle: {
                            normal: {
                                label: {
                                    position: 'top',
                                    textStyle: {
                                        color: 'black'
                                    }
                                }
                            }
                        },
                        initial:[850,550],
                        fixX:true,
                        fixY:true,

                    }
                ],
                links : [
                    {source : 'A', target : 'E', weight : 1, name: '机房连接'},
                    {source : 'E', target : 'A', weight : 1, name: '机房连接'},
                    {source : 'A', target : 'F', weight : 1, name: '机房连接'},
                    {source : 'F', target : 'A', weight : 1, name: '机房连接'},

                    {source : 'B', target : 'E', weight : 1, name: '机房连接'},
                    {source : 'E', target : 'B', weight : 1, name: '机房连接'},
                    {source : 'B', target : 'F', weight : 1, name: '机房连接'},
                    {source : 'F', target : 'B', weight : 1, name: '机房连接'},

                    {source : 'C', target : 'G', weight : 1, name: '机房连接'},
                    {source : 'G', target : 'C', weight : 1, name: '机房连接'},
                    {source : 'C', target : 'H', weight : 1, name: '机房连接'},
                    {source : 'H', target : 'C', weight : 1, name: '机房连接'},

                    {source : 'D', target : 'G', weight : 1, name: '机房连接'},
                    {source : 'G', target : 'D', weight : 1, name: '机房连接'},
                    {source : 'D', target : 'H', weight : 1, name: '机房连接'},
                    {source : 'H', target : 'D', weight : 1, name: '机房连接'},


                    {source : 'E', target : 'G', weight : 1, name: '机房连接'},
                    {source : 'G', target : 'E', weight : 1, name: '机房连接'},
                    {source : 'H', target : 'F', weight : 1, name: '机房连接'},
                    {source : 'F', target : 'H', weight : 1, name: '机房连接'},
                    {source : 'E', target : 'H', weight : 1, name: '机房连接'},
                    {source : 'H', target : 'E', weight : 1, name: '机房连接'},
                    {source : 'F', target : 'G', weight : 1, name: '机房连接'},
                    {source : 'G', target : 'F', weight : 1, name: '机房连接'}

                   

                    
                ]
            }]
        };

var ecConfig = require('echarts/config');
var myChart = ec.init(document.getElementById('main')); 
function focus(param) {
    var data = param.data;
    console.log(data);
    var links = option.series[0].links;
    var nodes = option.series[0].nodes;
    if (
        data.source !== undefined
        && data.target !== undefined
    ) { //点击的是边
        var sourceNode = data.source;
        var targetNode = data.target;
        alert("选中了边 " + sourceNode + ' -> ' + targetNode + ' (' + data.weight + ')');
    } else { // 点击的是点
        alert("选中了" + data.name + '(' + data.value + ')');
    }
}
myChart.on(ecConfig.EVENT.CLICK, focus);

myChart.on(ecConfig.EVENT.FORCE_LAYOUT_END, function () {
    console.log(myChart.chart.force.getPosition());
});
      
myChart.setOption(option);               
       });
})()