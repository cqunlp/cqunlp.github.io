var app = new Vue({
	el:"#app",
	data: {
		message:"请输入文本"
	},

    methods:{
        example1:function (){        
            var that = this;
            that.message = "针对多工况过程数据的批次不等长、中心漂移、工况结构不同等特点,提出基于统计模量和局部近邻标准化的局部离群因子故障检测方法(SP-LNS-LOF)";
           
        
        },

         example2:function (){
            var that = this;
            that.message =  "针对经典Otsu算法、最大熵算法、最小交叉熵算法等在低信噪比图像中分割效果较差的问题,从图像复杂度的角度提出了基于图像背景与目标的对象复杂度的图像分割方法,并采用曲线拟合方法大大减少了计算冗余,提高了算法的实时性与稳定性";
            
        },

        example3:function (){
            var that = this;
            that.message =  "详细阐述了分布式网络中数据一致性维护的研究内容和目标,综合运用分布式数据存储技术、对等网络可靠传输技术、分布式共识机制技术、非对称加密技术搭建了一个决策权高度分散的去中心化网络模型";
                          
        },
        buttonclick:function(){
            $('#json').text("");        
            var that = this;
            console.log(that.message);
             axios.get('http://39.100.48.36:3000/predict_ner?sentence='+that.message).then(function(response){
                console.log(response.data);
                 var entities = response.data.entities;
                 var sentence = JSON.stringify(response.data.sentence);
                 console.log(sentence);
                 var num = entities.length;                 
                 var tag = new Array();//存储位置
                 var map_e_t = new Map();//存储实体+实体类型
                 var map_l_e = new Map();                
                 for(var i = 0; i < num; i++){
                         tag.push( entities[i].begin,entities[i].end);
                         map_e_t.set(entities[i].entity,entities[i].tag);
                         map_l_e.set(entities[i].begin,entities[i].entity);
                         console.log(tag);                                   
                 }
                
                      tag.sort(function(a, b){return a - b});
                     
                       console.log(tag);
           
                 var j = 0;
                 var k = 0;
                 var flag = 0;                 
                 for(var i = 0; i < sentence.length; i++){
                     if(i >= tag[j] && i <= tag[j+1]){
                        // var t = 
                        // $('#json').append(sentence[i]);
                        if(flag == 0)
                        {
                          //j+=2;
                          flag = 1;
                          var entity = map_l_e.get(tag[j]);
                          console.log(entity);
                          var color = "";
                          switch(map_e_t.get(entity)){
                            case "CHAR":
                                color = "blue";
                                break;
                            case "ALG":
                                color = "green";
                                break;
                            case "UNKNOWN":
                                color = "red";
                                break;
                            case "OPQ":
                                color = "purple";
                                break;
                            case "MDL":
                                color = "#20B2AA";
                                break;
                            case "TECH":
                                color = "#40E0D0";
                                break;
                            case "EVI":
                                color = "#6495ED";
                                break;
                            case "APPD":
                                color = "#DA70D6";
                                break;
                            case "SET":
                                color = "#DAA520";
                                break;
                            case "PRA":
                                color = "#F0E68C";
                                break;
                            case "SYS":
                                color = "#FA8072";
                                break;
                            case "ARCH":
                                color = "#FFFF00";
                                break;
                            default:
                                color = "#8A2BE2";
                                break;

                          }
                          $('#json').append("<span class='label label-info' style='background-color:"+color+"'>"+entity+"</span>"); 
                        }        
                     } 
                     else
                     { 
                         if(flag == 1)
                         {
                             flag = 0;
                             j = j + 2;
                         }
                         $('#json').append(sentence[i+1]);               
                     }
                 }
                          
        },function(err){
            console.log(err);
             });
        }
    }

})