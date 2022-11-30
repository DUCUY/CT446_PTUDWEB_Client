<template>
  <div class="container">
    <div>
      <p class="title-form">Danh Sách Giấy tạm hoãn</p>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Họ tên</th>
          <th scope="col">Email</th>
          <th scope="col">MSSV</th>
          <!-- <th>
            <div class="">
              <button class="btn btn-primary">Them</button>
              <button type="" class="ml-2 btn btn-danger">Xóa</button>
            </div>
          </th> -->
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>b123</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div>
       <p class="title-form">Danh Sách Giấy Vay Vốn</p>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Họ tên</th>
          <th scope="col">Email</th>
          <th scope="col">MSSV</th>
          <!-- <th>
            <div class="">
              <button class="btn btn-primary">Them</button>
              <button type="" class="ml-2 btn btn-danger">Xóa</button>
            </div>
          </th> -->
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>b123</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import giayVayVon from "../services/giayVayVon.service.js";
export default {
  methods: {
    async getData() {
      await giayVayVon.getAll();
    },
  },
  mounted() {
    this.getData()
  },
};
</script>

<style>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
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