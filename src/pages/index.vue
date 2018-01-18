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
            <div class="item">
                <img src="../assets/logo.png" alt="titles" class="imgs">
                <div class="info">
                    <div class="title">这个是文章列表这个是文章列表</div>
                    <div class="interduce">这个是文章介绍这个是文章介绍</div>
                    <!-- <div class="data flex-x">
                        <div class="views">123</div>
                        <div class="backs">456</div>
                    </div> -->
                </div>
            </div>
            <div class="item">
                <img src="../assets/logo.png" alt="titles" class="imgs">
                <div class="info">
                    <div class="title">这个是文章列表这个是文章列表</div>
                    <div class="interduce">这个是文章介绍这个是文章介绍</div>
                    <!-- <div class="data flex-x">
                        <div class="views">123</div>
                        <div class="backs">456</div>
                    </div> -->
                </div>
            </div>
        </div>

        <div class="line">--- 空白页加载中 ---</div>
        
        <div class="showLoading">
            <InlineLoading></InlineLoading> <span style="vertical-align:middle;display:inline-block;font-size:14px; color: #999;">加载中...</span>
        </div>

        <div class="line" style="margin-top: 20px;">--- 去留言 ---</div>
            <XButton type="primary" link="/msg">留言</XButton>

        <div class="line" style="margin-top: 20px;">--- 测试 ---</div>
    </div>
</template>


<script>

import { Scroller, InlineLoading, XButton } from 'vux'

export default {
    name: 'index',
    data: () => {
        return {
            index: 1
        }
    },
    components: {
        Scroller,
        InlineLoading,
        XButton
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

        .list{
            width: 100%;
            .item{
                border-top: 1px solid #999;
                padding: 20px 0;
                overflow: hidden;
                .imgs{
                    width: 100px;
                    height: 60px;
                    border: 1px solid #999;
                    float: left;
                }
                .info{
                    width: 260px;
                    margin-left: 10px;
                    float: right;
                    .title{
                        width: 100%;
                        font-size: 16px;
                        font-weight: 600;
                        margin-top: 5px;
                    }
                    .interduce{
                        width: 100%;
                        font-size: 12px;
                        color: #ccc;
                        margin-top: 10px;
                    }
                    .data{
                        .views{

                        }
                        .backs{

                        }
                    }
                }
            }
        }

        .showLoading{
            width: 100px;
            margin: 0 auto;
        }
    }
</style>
