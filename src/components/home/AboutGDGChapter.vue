<template>
    <v-container class="pa-0 white--text">
        <v-layout wrap align-center justify-center row fill-height class="my-3" >
           <v-flex xs12 md12 lg12 class="pa-2">
               <p class="google-font" style="font-size:150%">关于 {{chapterDetails.ChapterName}}</p>
               <p class="google-font" style="font-size:110%">
                   {{chapterDetails.ChapterLongDec}}
               </p>
               <v-btn :href="chapterDetails.CQULink" target="_blank" outline color="white" class="ma-0 google-font" style="border-radius:5px;text-transform: capitalize;">重庆大学</v-btn>
               &nbsp;
               <v-btn :href="chapterDetails.CQUCSLink" target="_blank" outline color="white" class="ma-0 google-font" style="border-radius:5px;text-transform: capitalize;">重庆大学计算机学院</v-btn>
                <br><br>
               <router-link to="/about" class="google-font" style="text-decoration:none;color:white">See More about {{chapterDetails.ChapterName}}</router-link>
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
