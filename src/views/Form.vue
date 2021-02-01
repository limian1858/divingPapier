<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <div class="flex-form">
            <el-form-item class="name" prop="first">
                <el-input placeholder="First Name" v-model="ruleForm.first"></el-input>
            </el-form-item>
            <el-form-item class="name" prop="last">
                <el-input placeholder="Last Name" v-model="ruleForm.last"></el-input>
            </el-form-item>
        </div>
        <el-form-item class="tp" prop="email">
            <el-input placeholder="Email" v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item class="tp" prop="company">
            <el-input placeholder="Company" v-model="ruleForm.company"></el-input>
        </el-form-item>
        <el-form-item class="tp" prop="birefly">
            <el-input type="textarea" placeholder="Birefly" v-model="ruleForm.birefly"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button :loading="loading" class="submitForm" type="" @click="submitForm('ruleForm')">
                Send Message
                <i class="el-icon-right"></i>
            </el-button>
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
                first: [{required: true, message: 'First name', trigger: 'change'}],
                last: [{required: true, message: 'Last name', trigger: 'change'}],
                email: [{required: true, message: 'Email', trigger: 'change'}],
                company: [{required: true, message: 'Company', trigger: 'change'}],
            },
            loading: false,
            timer: null
        };
    },
    methods: {
        submitForm(formName) {
            console.log(formName);
            this.$refs[formName].validate((valid) => {
                console.log(valid);
                if (valid) {
                    this.loading = true;
                    this.timer = setTimeout(() => {
                        this.loading = false;
                    }, 3000);

                } else {
                    return false;
                }
            });
        },
    },
    destroyed() {
        clearTimeout(this.timer);
    }
};
</script>

<style lang="less" scoped>
.demo-ruleForm {
    width: 642PX;
    height: 459PX;

    .flex-form {
        display: flex;
        justify-content: space-between;
    }
}
</style>
