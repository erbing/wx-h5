<template>
  <div>
    <group>
        <cell title="100" value="value">
            <h3 @click="tests">This is H3</h3>
        </cell>
    </group>

    <group>
        <cell title="100" value="value">
            <Countdown :value="100" :start="true"></Countdown>
        </cell>
    </group>

    <group>
        <icon type="success"></icon>
        <icon type="info"></icon>
        <icon type="info-circle"></icon>
        <icon type="warn"></icon>
        <icon type="waiting"></icon>
        <icon type="waiting-circle"></icon>
        <icon type="safe-success"></icon>
        <icon type="safe-warn"></icon>
        <icon type="success-circle"></icon>
        <icon type="success-no-circle"></icon>
        <icon type="circle"></icon>
        <icon type="download"></icon>
        <icon type="cancel"></icon>
        <icon type="search"></icon>
        <icon type="clear"></icon>
        <br/><br/>
        <icon type="success" is-msg></icon>
        <icon type="info" is-msg></icon>
        <icon type="safe-success" is-msg></icon>
        <icon type="safe-warn" is-msg></icon>
    </group>
  </div>
</template>

<script>
import { Group, Cell, Countdown, Icon } from 'vux'

export default {
    name: 'index',
    components: {
        Group,
        Cell,
        Countdown,
        Icon
    },
    computed: {
        markCode() {
            return this.test + 123123
        }
    },
    data() {
        return {
            test: 123
        }
    },
    methods: {
        tests() {
            console.log('this is tests')
        },
        testApi() {
            this.$http('/Spreader/api/product/list', (res) => {
                console.log('====>>>> res', res)
            }, (err) => {
                console.log(err)
            })
        }
    },
    mounted() {
        console.log('=========>>>>>', 'this is props')
    },
    created() {
        this.testApi()
        console.log('=======<<<<< this is created')
    }
}
</script>