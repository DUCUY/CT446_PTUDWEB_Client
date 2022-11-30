<template>
  <Form @submit="submitContact" :validation-schema="contactFormSchema" class="container col-md-6">
    <div class="title-form ">
      Đăng Ký Tài Khoản
    </div>
    <div class="form-group">
      <label for="name">Họ Tên</label>
      <Field
        name="name"
        type="text"
        class="form-control"
        v-model="name"
      />
      <ErrorMessage name="name" class="error-feedback" />
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
      <label for="mssv">MSSV</label>
      <Field
        name="mssv"
        type="text"
        class="form-control"
        v-model="mssv"
      />
      <ErrorMessage name="mssv" class="error-feedback" />
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
    <!-- <div class="form-group form-check">
      <input
        name="favorite"
        type="checkbox"
        class="form-check-input"
        v-model="contactLocal.favorite"
      />
      <label for="favorite" class="form-check-label">
        <strong>Liên hệ yêu thích</strong>
      </label>
    </div> -->
    <div class="form-group">
      <button class="btn btn-primary" >Đăng Ký
        <!-- <router-link to="{path:'/dangNhap'}"/> -->
      </button>
      <!-- <button
        v-if="contactLocal._id"
        type="button"
        class="ml-2 btn btn-danger"
        @click="deleteContact"
      >
        Xóa
      </button> -->
    </div>
  </Form>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import userService from "../services/user.service"
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
      name: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),
      email: yup
        .string()
        .email("E-mail không đúng.")
        .max(50, "E-mail tối đa 50 ký tự."),
      mssv : yup
        .string()
        .required("Phải nhập mssv")
        .min(3, "MSSV phải có ít nhất 3 ký tự")
        .max(20, "MSSV có nhiều nhất 20 ký tự"),
      password: yup
        .string()
        .required("Phải nhập password")
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .max(20, "Mật khẩu có nhiều nhất 20 ký tự"),
      
      // address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
      // phone: yup
      //   .string()
      //   .matches(
      //     /((09|03|07|08|05)+([0-9]{8})\b)/g,
      //     "Số điện thoại không hợp lệ."
      //   ),
    });
    return {
      // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
      // contactLocal để liên kết với các input trên form
      name:'',
      email:'',
      mssv: '',
      password: '',
      contactFormSchema,
    };
  },
  methods: {
    async submitContact() {
      // console.log(this.email);
      let data = {
        name: this.name,
        email: this.email,
        mssv: this.mssv,
        password: this.password,

      }
      // localStorage.setItem('statelogin',JSON.stringify(data));
      const result= await userService.create(data)

      if (result.state == "success"){
        this.$router.push('/dangNhap')
      } 
    }
  },
};
</script>
<style scoped>
/* @import "@/assets/form.css"; */
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
