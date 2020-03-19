var app = new Vue({
	el:"#app",
	data: {
		message:"请输入文本"
	},

    methods:{
        example1:function (){        
            var that = this;
            that.message = "针对经典Otsu算法、最大熵算法、最小交叉熵算法等在低信噪比图像中分割效果较差的问题,从图像复杂度的角度提出了基于图像背景与目标的对象复杂度的图像分割方法,并采用曲线拟合方法大大减少了计算冗余,提高了算法的实时性与稳定性";
            
        
        },

         example2:function (){
            var that = this;
            that.message =  "针对传统图像拼接算法不适用于局部特征点多的微观图像实时拼接问题,结合Harris角点、SURF算法和KMeans算法提出了一种改进的算法";
        },

        example3:function (){
            var that = this;
            that.message =  "实验结果表明,基于BTPV模型的分布式表示较常见的分布式向量化模型word2vec和ParagraphVector来说能取得更好的短文本聚类效果,从而显现出该模型面向短文本分析的优势";
            
        },
        buttonclick:function(){
            $('#json').text("");        
            var that = this;
            console.log(that.message);
             axios.get('http://39.100.48.36:3001/graph?sentence='+that.message).then(function(response){
                console.log(response.data);
                console.log(response);

                var dom = document.getElementById("chart");
                var myChart = echarts.init(dom);
                var app = {};
                option = null;
                var data = response.data;

                console.log(typeof(data));


                option = {
            //   title: {
            //     text: '图谱如下',
            //     textAlign: 'right'
            //  },
           
            series: [{
                type: 'graph',
                layout: 'force',
                symbolSize: 58,
                roam: true,
                focusNodeAdjacency: true,
                tooltip: {
                formatter(x) {
                    return x.data.des;
                }
             },
              legend: {
                x: 'center',
                data: ['一级关系', '二级关系', '三级关系']
             },
                edgeSymbol: ['', 'arrow'],
                // edgeSymbolSize: [80, 10],
                edgeLabel: {
                    normal: {
                        textStyle: {
                            fontSize: 20
                        },
                        show: true,
                        formatter(x) {
                            return x.data.name;
                        }
                    }
                },
                force: {
                    repulsion: 2000,
                    edgeLength: 120
                },
                draggable: true,
                itemStyle: {
                    normal: {
                        color: '#4b565b'
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1,
                        color: '#4b565b'

                    }
                },
                label: {
                    normal: {
                        show: true,
                        textStyle: {}
                    }
                },
                data: data.antity,
                links: data.relation
            }]
        }

        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
                          
        },function(err){
            console.log(err);
             });
        }
    }

})