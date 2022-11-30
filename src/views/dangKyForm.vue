<template>
  <Form
    @submit="submitContact"
    :validation-schema="contactFormSchema"
    class="container col-md-6"
  >
    <div class="title-form">Đăng Ký Giấy Xác Nhận</div>
    <div class="form-group">
      <label for="name">Họ Tên</label>
      <Field name="name" type="text" class="form-control" v-model="name" />
      <ErrorMessage name="name" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="email">E-mail</label>
      <Field name="email" type="email" class="form-control" v-model="email" />
      <ErrorMessage name="email" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="mssv">MSSV</label>
      <Field name="mssv" type="text" class="form-control" v-model="mssv" />
      <ErrorMessage name="mssv" class="error-feedback" />
    </div>

    <div class="form-group">
      <label for="gdk">Giấy Đăng ký</label>
      <select v-model="gdk" class="form-select mt-3">
        <!-- <option disabled="">Chọn giấy muốn đăng ký.</option> -->
        <option value="THNVQS " name="gdk">
          Giấy tạm hoãn Nghĩa vụ Quân sự
        </option>
        <option value="HTVV" name="gdk">Giấy hỗ trợ Vay Vốn</option>
        <option value="ALL" name="gdk">Cả hai giấy</option>
      </select>
    </div>

    <div class="form-group">
      <button class="btn btn-primary">Đăng Ký</button>
      <button type="button" class="ml-2 btn btn-danger" @click="deleteContact">
        Xóa
      </button>
    </div>
  </Form>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import giayTamHoanService from "../services/giayTamHoan.service";
import giayVayVonService from "../services/giayVayVon.service";
// import userService from "../services/user.service";
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
      mssv: yup
        .string()
        .required("Phải nhập mssv")
        .min(3, "MSSV phải có ít nhất 3 ký tự")
        .max(20, "MSSV có nhiều nhất 20 ký tự"),
    });
    return {
      // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
      // contactLocal để liên kết với các input trên form
      id: "",
      name: "",
      email: "",
      mssv: "",
      contactFormSchema,
    };
  },
  methods: {
    async submitContact() {
      let data = {
        name: this.name,
        email: this.email,
        mssv: this.mssv,
        gdk: this.gdk,
      };
      // console.log(data.gdk.includes("HTVV"));
      if (data.gdk.includes("THNVQS")) {
        // const result1 =
        // console.log('giay tam hoan');
        // let result = await giayTamHoanService.getAll();
        let result = await giayTamHoanService.create(data);
        localStorage.setItem("idData", JSON.stringify(result.user));
        if (result.state == "success") {
          this.id = result.giayTamHoan._id;
          alert("Đăng Ký Giấy Thành Công.");
        }
      } else {
        if (data.gdk.includes("HTVV")) {
          //  console.log('giay vay von');
          let result = await giayVayVonService.create(data);
          localStorage.setItem("idData", JSON.stringify(result.user));
          if (result.state == "success") {
            alert("Đăng Ký Giấy Thành Công.");
          }
        } else {
          if (data.gdk.includes("ALL")) {
            // const result1 =
            //  console.log('giay all');
            const result1 = await giayTamHoanService.create(data);
            localStorage.setItem("idData", JSON.stringify(result.user));
            // const result2 =
            const result2 = await giayVayVonService.create(data);
            localStorage.setItem("idData", JSON.stringify(result.user));
            if (result1.state == "success" && result2.state == "success") {
              alert("Đăng Ký Giấy Thành Công.");
            }
          }
        }
      }
    },

    async deleteContact() {
      if (this.gdk.includes("THNVQS")) {
        console.log(this.id);
        let result3 = await giayTamHoanService.delete(this.id);
        if (
          result3.message.includes("Giay Tam Hoan was deleted successfully")
        ) {
          alert("Bạn Đã Xóa Thành Công.");
        }
      } else {
        if (this.gdk.includes("HTVV")) {
          console.log(this.id);
          let result3 = await giayTamHoanService.delete(this.id);
          if (
            result3.message.includes("Giay Vay Von was deleted successfully")
          ) {
            alert("Bạn Đã Xóa Thành Công.");
          }
        }
      }
      //   if (submitContact(data.gdk.includes("HTVV"))) {
      //     let result4 = await giayVayVonService.delete(localStorage.getItem('idData',JSON.stringify(result.user)))
      //     if (result4.state == "Giay Vay Von was deleted successfully") {
      //       alert("Bạn Đã Xóa Thành Công.");
      //     }
      //   } else {
      //     if (submitContact(data.gdk.includes("ALL"))) {
      //       let result5 = await giayTamHoanService.delete(localStorage.getItem('idData',JSON.stringify(result.user)))
      //       let result6 = await giayVayVonService.delete(localStorage.getItem('idData',JSON.stringify(result.user)))
      //       if (result5.state == "Giay Tam Hoan was deleted successfully" && result6.state == "Giay Vay Von was deleted successfully") {
      //         alert("Bạn Đã Xóa Thành Công.");
      //       }
      //     }
      //   }
      // }
    },
  },
  mounted() {
    this.name = JSON.parse(localStorage.getItem("data")).name;
    this.email = JSON.parse(localStorage.getItem("data")).email;
    this.mssv = JSON.parse(localStorage.getItem("data")).mssv;
  },
};
</script>
<style scoped>
.error-feedback {
  color: red;
}
.form-group {
  margin-bottom: 20px;
}

.title-form {
  font-weight: bold;
  border-style: outset;
  background-color: #b5e3f7;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 24px;
}
</style>
