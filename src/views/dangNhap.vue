<template>
  <Form @submit="submitContact" :validation-schema="contactFormSchema" class="container col-md-6"> 
    <div class="title-form ">
      Đăng Nhập
    </div>
    <div class="form-group">
      <label for="email">E-mail</label>
      <Field
        name="email"
        type="email"
        class="form-control"
        v-model="email"
      />
      <ErrorMessage name="email" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="password">Mật khẩu</label>
      <Field
        name="password"
        type="password"
        class="form-control"
        v-model="password"
      />
      <ErrorMessage name="password" class="error-feedback" />
    </div>

    <div class="form-group">
      <button class="btn btn-primary">Đăng Nhập</button>
    </div>
  </Form>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import userService from "../services/user.service"
// import dangKyForm from './dangKyForm.vue';
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit: ", "delete:"],
  // props: {
  //   contact: { type: Object, required: true },
  // }, 
  data() {
    const contactFormSchema = yup.object().shape({
      email: yup
        .string()
        .email("E-mail không đúng.")
        .max(50, "E-mail tối đa 50 ký tự."),

      password: yup
        .string()
        .required("Phải nhập password")
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .max(20, "Mật khẩu có nhiều nhất 20 ký tự"),
      
    });
    return {
      // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
      // contactLocal để liên kết với các input trên form
      email:'',
      password: '',
      contactFormSchema,
    };
  },
  methods: {
    async submitContact() {
      // console.log(this.email);
      // console.log(this.password);
      let data = {
        email: this.email,
        password: this.password,

      }
      
      const result = await userService.up(data);
      
      // console.log(result);
      if (result.state == "success"){
        localStorage.setItem('data',JSON.stringify(result.user));
        if (result.user.type == "user"){
           this.$router.push('/dangKyForm')
        } else { 
          this.$router.push('/listFormDangKy')
        }
      };
     }
  },
};
</script>
<style scoped>
.error-feedback {
    color: red; 
}

.form-group{
  margin-bottom: 20px;
}

.title-form{
    font-weight: bold;
    border-style: outset;
    background-color: #b5e3f7;
    margin-bottom: 10px;
    margin-top: 10px ;
    font-size: 24px;
}

</style>
