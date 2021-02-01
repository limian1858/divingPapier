<template>
    <el-form  :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
       <div class="flex-form">
           <el-form-item class="name">
               <el-input placeholder="First Name" v-model="ruleForm.first"></el-input>
           </el-form-item>
           <el-form-item class="name">
               <el-input placeholder="Last Name" v-model="ruleForm.last"></el-input>
           </el-form-item>
       </div>
        <el-form-item class="tp">
            <el-input placeholder="Email" v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item  class="tp">
            <el-input placeholder="Company" v-model="ruleForm.company"></el-input>
        </el-form-item>
        <el-form-item  class="tp">
            <el-input type="textarea" placeholder="Birefly" v-model="ruleForm.birefly"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button class="submitForm" type="" @click="submitForm('ruleForm')">Send Message</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name: 'Form',
    data() {

        return {
            ruleForm: {
                first: '',
                last: '',
                email: '',
                company: '',
                birefly: '',
            },
            rules: {

            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {

                } else {
                    return false;
                }
            });
        },
    }
};
</script>

<style lang="less" scoped>
.demo-ruleForm{
    width: 642PX;
    height: 459PX;
    .flex-form{
        display: flex;
        justify-content: space-between;
    }
}
</style>
