<template>
    <v-container class="pa-0">
        <v-layout wrap align-center justify-center row fill-height >
           <v-flex xs12 md3 lg3 class="pa-2">
               <p class="google-font" style="font-size:180%">我们的工作</p>
               <!-- <p class="google-font" style="font-size:110%">Google Developer Groups (GDGs) are for developers who are interested in Google's developer technology.</p> -->
               <p class="google-font" style="font-size:110%">从论文、专利等文本中提取“实体-关系”三元组，构造专业知识图谱。</p>
               <p class="google-font" style="font-size:110%">通过知识图谱辅助自动文本摘要生成，提供有效精简的核心专业知识文本。</p>
               <p class="google-font" style="font-size:110%">对文本的通顺性、上下文一致性等特征进行质量评估</p>
               <p class="google-font" style="font-size:110%">设计开发标注系统、知识图谱编辑系统等工具</p>
               <!-- <p class="google-font" style="font-size:110%">About different Google technologies</p>

                <span v-for="(item,i) in whatWeDoData" :key="i">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }" >
                            <a :href="item.link" target="_blank" flat class="ma-0">
                                <img :src="getImgUrl(item.image)" width="30vh" alt="" srcset="" dark v-on="on">
                            </a> 
                            &nbsp;&nbsp;&nbsp;
                        </template>
                        <span>{{item.TechName}}</span>
                    </v-tooltip>
                </span>
                 -->
                <!-- <br><br> -->

                <v-btn :href="chapterDetails.GDGProgramWebsite" outline target="_blank" round color="cyan" style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;" flat  class="ml-0 google-font hidden-md-and-down" dark>更多信息</v-btn>

            </v-flex> 
            <v-flex xs12 md9 lg9 class="">
                <v-layout row wrap>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%">chat_bubble</v-icon>
                        <p class="google-font" style="font-size:150%">服务接口</p>
                        <p class="google-font" style="font-size:120%">提供不同类型的自然语言处理服务接口</p>
                    </v-flex>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%">code</v-icon>
                        <p class="google-font" style="font-size:150%">开源模型</p>
                        <p class="google-font" style="font-size:120%">开源SOTA模型并托管于Github</p>
                    </v-flex>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%">school</v-icon>
                        <p class="google-font" style="font-size:150%">知识共享</p>
                        <p class="google-font" style="font-size:120%">提供计算机、医疗、法学等八个领域的关联知识</p>
                    </v-flex>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%">airplay</v-icon>
                        <p class="google-font" style="font-size:150%">知识网红</p>
                        <p class="google-font" style="font-size:120%">通过直播、公开课等方式提供前沿知识</p>
                    </v-flex>

                </v-layout>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
import whatWeDoData from '@/assets/data/whatWeDoComponentData.json'
import ChapterDetails from '@/assets/data/chapterDetails.json'
export default {
    data() {
        return {
            chapterDetails: ChapterDetails,
            whatWeDoData: whatWeDoData
        }
    },
    methods:{
        getImgUrl(url) {
            if(url.length>0){
                return require('@/assets/img/what-we-do/'+url)
            }else{
                return require('@/assets/img/what-we-do/notFound.png')
            }
        },
    }
}
</script>
