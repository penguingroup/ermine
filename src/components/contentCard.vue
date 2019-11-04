<template>
    <div>
        <el-row v-for="(data, index) in data_list" :key="index" :offset="index > 0 ? 2 : 0">
            <el-col :span="6">&nbsp;</el-col>
            <el-col :span="12">
                <br/>
                <el-card :body-style="{ padding: '0px' }">
                    <el-row>
                        <el-col :span="8">
                            <img :src="data.poster" class="image">
                        </el-col>
                        <el-col :span="16">
                            <div style="padding: 14px;">
                                <span>{{ data.title }}</span>
                                <div class="bottom clearfix">
                                    <time class="time">{{ data.sub_title }}</time><br/>
                                    <el-button type="text" class="button" @click="handlerGoDetail">阅读全文>></el-button>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
                <br/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "contentCard",
        data() {
            return {
                data_list: [
                    {
                        title: "惟其勇毅笃行，方显英雄本色",
                        sub_title: "2019年上半年习近平主席引领中国特色大国外交开辟新境界。",
                        poster: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                    },
                    {
                        title: "传百度查处数十起内部贪腐案件：涉及虚假打车、虚报加班",
                        sub_title: "百度整天没事瞎几把管，该管的不管，不该管的瞎管。",
                        poster: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                    }
                ]
            };
        },
        methods: {
            handlerGoDetail(){
                this.$router.push({
                    name: 'contentdetail'
                });
            }
        }
    }
</script>

<style scoped>
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>
