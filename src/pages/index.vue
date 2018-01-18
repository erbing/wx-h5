<template>
    <div class="index">

        <div class="line">--- 头部导航 ---</div>

        <scroller lock-y :scrollbar-x="false">
            <div class="tests">
                <ul>
                    <li>保险</li>
                    <li>保险</li>
                    <li>保险</li>
                    <li>保险</li>
                    <li>保险</li>
                </ul>
            </div>
        </Scroller>

        <div class="line">--- list 列表 ---</div>
        

        <div class="list">
            <div class="item"></div>
        </div>

    </div>
</template>


<script>

import { Scroller } from 'vux'

export default {
    name: 'index',
    data: () => {
        return {
            index: 1
        }
    },
    components: {
        Scroller
    }
}
</script>

<style lang="less">
    .index{
        .line{
            font-size: 16px;
            width: 100%;
            text-align: center;
            margin-bottom: 20px;
            color: #2CB044;
        }
        .tests{
            height: 100px;
            position: relative;
            width: 580px;
            ul{
                padding: 0;
                margin: 0;
                li{
                    list-style: none;
                    width: 100px;
                    height: 80px;
                    line-height: 80px;
                    background: #ccc;
                    float: left;
                    text-align: center;
                    margin-right: 20px;
                    display: inline-block;
                }
                li:last-child {
                    margin-right: 0px;
                }
            }
        }
    }
</style>
