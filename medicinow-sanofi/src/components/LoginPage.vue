<template>
<div class="loginpage" >
  <div class="mod">
    <h1 class='txt'>
      <b-img   height="100px":src="require('../assets/bandaids.png')"  alt="Responsive image" />
      MediciNow</h1>
  </div>

  <div class="colored-div">
    <b-card class="size" border-variant="dark" >
      <b-form >
        <b-form-group
        id="input-group-5"
        label="E-mail:"
        label-for="input-5"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        >
        <b-form-input
        id="input-5"
        v-model="form.email"
        type="email"
        required
        placeholder="Insira o e-mail"
        size="lg"
        ></b-form-input>
      </b-form-group>

      <b-form-group
      id="input-group-6"
      label="Senha:"
      label-for="input-6"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      >
      <b-form-input
      id="input-6"
      v-model="form.password"
      size="lg"
      type="password"
      required
      placeholder="Insira a senha"
      ></b-form-input>
    </b-form-group>
  </b-form >
  <div class="text-center">
    <b-button variant="outline-dark" size="lg">Login</b-button>
    <p class="note">Esqueceu sua senha?
      <a href=" ">Clique aqui</a>
    </p>
  </div>
</b-card>



</b-row>
</div>
</div>
</template>

<script>
export default {
name: 'loginpage',
data() {
  return {
    form: {
      name: '',
      email: '',
      food: null,
      checked: []
    },
    foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
    show: true
  }
},
}
</script>

<style>
.note {
margin-top: 20px;
}
.txt {
font-weight:bold;
text-align: center;
}
.colored-div{
background-color: ;
}
.size {
margin: 40px auto 40px auto ;
width:450px ;

}
.mod{
margin-top: 20px;
align-content:center;
}
</style>
