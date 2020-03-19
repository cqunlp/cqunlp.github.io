var app = new Vue({
	el:"#app",
	data: {
		message:"请输入文本"
	},

    methods:{
        example1:function (){        
            var that = this;
            that.message = "不邀自来，今年已经明显降温。中部985本硕，本科自动化，硕士目标检测。最后签了华为的软开工程师。15年16年师兄学几个tensorflow示例程序，李航的书、剑指offer刷个两遍，就能拿几个offer。研一开始我学了cs231n做了作业，读了几十篇detection方面的论文，vgg、googlenet、resnet、faster rcnn、ssd、yolo和fpn精读了好几遍，faster rcnn和ssd代码逐行仔细地看了一遍，做了点改进发了一篇SCI、一篇EI。李航的书看了几遍，剑指offer刷了一遍，目前内推机器学习和数据挖掘岗位全没通过。投大疆机器学习岗位甚至连很有信心的笔试都没过。拿到算法offer的都是不靠谱的小公司和创业公司。一个舍友研究生划水，做了几年android开发，拿到了阿里的实习和正式offer。另一个舍友把408几本书重新看了一遍，狂刷半年的leetcode拿到了腾讯的实习。以我的经验，AI岗需求少，要求高，候选人中大牛太多。如果仅是本科或硕士，实验室没有发一流期刊或者会议的能力，就不要把准备全部放在算法岗位上。";
        },

         example2:function (){
            var that = this;
            that.message = "简单的话说，在工业界，机器学习（广泛的知识，不限于最新技术）+分布式并行计算的工程型人才；在学术界，深厚数学功底，机器学习理论，可以深入算法底层的研究型人才。";
        },

        example3:function (){
            var that = this;
            that.message = "自从买了MacBook Pro天天打“文明6”肝到半夜。自从买了ipad后一直用来看视频。至少对我来说，学习跟机器之间完全没有联系。";
        },
        buttonclick:function(){
            $('#json').text("功能完善中！");        
                  
        }
    }
})