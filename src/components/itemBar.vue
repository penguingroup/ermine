<template>
    <div>
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                            v-for="city in cities"
                            :key="city.code"
                            :label="city.name"
                            :value="city.code">
                    </el-option>
                </el-select>
            </el-menu-item>
            <el-menu-item v-for="category in categories" :key="category.code" :index="category.index" @click="goRouter(category.route)">
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
                    route: {
                        name: 'homecode',
                        params: {
                            type: 'hot'
                        }
                    }
                }, {
                    name: '时政',
                    code: 'politic',
                    index: '3',
                    route: {
                        name: 'homecode',
                        params: {
                            type: 'politic'
                        }
                    }
                }, {
                    name: '娱乐',
                    code: 'entertainment',
                    index: '4',
                    route: {
                        name: 'homecode',
                        params: {
                            type: 'entertainment'
                        }
                    }
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
                        this.categories[i].route = {
                            name: 'homecode',
                            params: {
                                type: this.categories[i].code,
                                name: this.categories[i].name
                            }
                        }
                    }
                })
                .catch(err => {
                    console.log(err);
                });
            this.goRouter(this.categories[this.activeIndex]['route']);
        },
        methods: {
            handleSelect() {

            },
            goRouter (route) {
                this.$router.push(route)
            }
        }
    }
</script>

<style scoped>

</style>
