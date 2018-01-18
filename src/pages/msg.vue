<template>
    <div>
        <XTextarea autosize class="text" style="padding: 0;" placeholder="提交通过审核后才会显示"></XTextarea>

        <h1>
            提交
        </h1>
    </div>
</template>

<script>
import { XTextarea } from 'vux'

export default {
    name: 'msg',
    components: {
        XTextarea 
    }
}
</script>

<style lang="less">
    .text{
        padding: 0;
        font-size: 14px;
    }
</style>
