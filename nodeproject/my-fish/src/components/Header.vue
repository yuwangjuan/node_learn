<template>
    <div>
        <!-- <div class="header-box"> -->
            <Row class=" layout header-box">
                <Col class="sider-box" span="8">geren</Col>
                <Col class="content-box" span="16">
                    <Row>
                        <Col span="3">123</Col>
                        <Col span="3">123</Col>
                        <Col span="3">123</Col>
                        <Col span="3">123</Col>
                        <Col span="3">123</Col>
                        <Col span="3">123</Col>
                    </Row>
                </Col>
            </Row>
        <!-- </div> -->
    </div>
</template>
<script>
export default{
    name:'Header',
    data(){
    return{
        
        }
    },
    methods:{
        getNav(){
            this.$axios({
                url:this.$url+'/getNav',
                method:'get',
                dataType:'json'
            }).then((res) =>{
                console.log(res,'res')
            })
        }
    }
}
</script>
<style>
    .header-box{
        width:100%;
        height:0.8rem;
        background:#2c3e50;
        color:#fff;
    }
    .sider-box{
        text-align:center;
        line-height:0.8rem;
    }
    .content-box{
        text-align:center;
        line-height:0.8rem;
        /* margin-left:1rem; */
    }
</style>