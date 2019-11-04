<template>
    <div>
        <el-menu :default-active="activeIndex" mode="horizontal">
            <el-menu-item index="1">
                <el-select v-model="value" placeholder="请选择" @change="handleChange">
                    <el-option
                            v-for="city in cities"
                            :key="city.code"
                            :label="city.name"
                            :value="city.name">
                    </el-option>
                </el-select>
            </el-menu-item>
            <el-menu-item v-for="category in categories" :key="category.code" :index="category.index" @click="goRouter(category.code, category.name, '北京')">
                {{category.name }}
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "itemBar",
        data() {
            return {
                city: '北京',
                cities: [{
                    name: '北京',
                    code: 'beijing',
                }, {
                    name: '上海',
                    code: 'shanghai',
                }, {
                    name: '深圳',
                    code: 'shenzhen',
                }],
                value: '北京',
                activeIndex: '2',
                categories: [{
                    name: '热点',
                    code: 'hot',
                    index: '2',
                }, {
                    name: '时政',
                    code: 'politic',
                    index: '3',
                }, {
                    name: '娱乐',
                    code: 'entertainment',
                    index: '4',
                }],

            }
        },
        mounted () {
            /* eslint-disable */
            axios.get("http://localhost:8088/api/header/city")
                .then(response => this.cities = response.data.data)
                .catch(err => {
                    console.log(err);
                });
            axios.get("http://localhost:8088/api/header/category")
                .then(response => {
                    this.categories = response.data.data;
                    for (let i=0; i<this.categories.length; i++) {
                        this.categories[i].index = (i+2).toString();
                    }
                })
                .catch(err => {
                    console.log(err);
                });
            this.goRouter(this.categories[this.activeIndex]['code'], this.categories[this.activeIndex]['name'], this.city);
        },
        methods: {
            handleChange(val) {
                console.log(val);
                this.goRouter(this.categories[this.activeIndex]['code'], this.categories[this.activeIndex]['name'], val);
            },
            goRouter (route, category, city) {
                this.$router.push({
                    name: 'homecode',
                    params: {
                        type: route,
                        category: category,
                        city: city,
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
