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
            <el-menu-item v-for="(category, index) in categories" v-bind:key="category.code" :index="index+2">{{ category.name }}</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "itemBar",
        data() {
            return {
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
                value: '',
                activeIndex: 2,
                categories: [{
                    name: '热点',
                    code: 'hot',
                }, {
                    name: '时政',
                    code: 'politic',
                }, {
                    name: '娱乐',
                    code: 'entertainment',
                }],

            }
        },
    }
</script>

<style scoped>

</style>
