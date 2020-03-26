<template>
    <v-container class="pa-0">
        <v-layout wrap align-center justify-center row fill-height >
           <v-flex xs12 sm5 md3 lg3 xl3 class="text-xs-center pa-3">
                <v-img
                    :src="require('@/assets/img/gdg.jpg')"
                    :lazy-src="require('@/assets/img/gdg.jpg')"
                    width="100%">
                    <v-layout
                        slot="placeholder"
                        fill-height
                        align-center
                        justify-center
                        ma-0
                    >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                </v-img>
            </v-flex> 
            <v-flex xs12 sm7 md8 lg8 xl8 class="">
                <p class="google-font mb-1" style="font-weight: 350;color: #616161;font-size:300%"><b>面向<span style="color: #1a73e8;">专业知识内容</span> 
                    的NLP服务</b>
                </p>
                <p class="google-font mt-0" style="font-size:180%">{{chapterDetails.ChapterName}}</p>
                <p class="google-font" style="font-size:130%">{{chapterDetails.ChapterShortDescription}}</p>
                <p class="google-font" style="font-size:130%">{{chapterDetails.SeriveDescription}}</p>
                <p class="google-font" style="font-size:120%;color:#9e9e9e">
                    <span>现有服务：</span>
                    <span v-for="(item,i) in chapterDetails.ServiceHashTags" :key="i">
                        #{{item}} &nbsp;
                    </span>
                </p>

                <v-btn :href="chapterDetails.ServiceLink" target="_blank" class="ma-0 google-font elevation-1" color="#1a73e8" style="text-transform: capitalize;border-radius:5px;color:white;font-size:120%">试用服务</v-btn>

                &nbsp;

                <v-btn :href="chapterDetails.TeacherLink" target="_blank" class="ma-0 google-font elevation-1" color="#1a73e8" style="text-transform: capitalize;border-radius:5px;color:white;font-size:120%">加入我们</v-btn>

                &nbsp;

                <v-btn :href="chapterDetails.GDGProgramWebsite" target="_blank" round color="cyan" style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;font-size:120%" outline  class="ml-0" dark>更多信息</v-btn>

            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
export default {
    data() {
        return {
            chapterDetails: ChapterDetails
        }
    },
}
</script>
