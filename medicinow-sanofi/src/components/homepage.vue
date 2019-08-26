<template>
  <section>
    <b-navbar>
      <template slot="brand">
          <b-navbar-item href="/">
              <p style="font-weight: bold; color: #4287f5; font-size: 25px;">MediciNOW</p>
          </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#">
          <a
          class="navbar-item"
          role="button">
            <span>Nova Consulta</span>
          </a>
        </b-navbar-item>

        <b-navbar-item>
          <b-dropdown hoverable aria-role="list">
            <a
            class="navbar-item"
            slot="trigger"
            role="button">
              <span>Listar consultas</span>
            </a>

            <b-dropdown-item aria-role="listitem">Visualização Geral</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Confirmadas</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Canceladas</b-dropdown-item>
          </b-dropdown>
        </b-navbar-item>

        <b-navbar-item>
          <b-dropdown hoverable aria-role="list">
            <a
            class="navbar-item"
            slot="trigger"
            role="button">
              <span>Configurações</span>
            </a>

            <b-dropdown-item aria-role="listitem">Dados Pessoais</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Dados de pagamento</b-dropdown-item>

            <hr class="dropdown-divider">

            <b-dropdown-item aria-role="listitem">Sair</b-dropdown-item>
          </b-dropdown>
        </b-navbar-item>
      </template>
    </b-navbar>

    <b-steps v-model="activeStep" :animated="isAnimated" type="is-info" :has-navigation="false">
      <b-step-item label="Especialidade" :clickable="isStepsClickable">
        <b-field grouped style="padding-top: 40px; padding-bottom: 40px;" >
          <b-autocomplete
           style="padding-left: 10px;"
           v-model="name"
           :data="filteredDataArray"
           placeholder="Pesquisar especialidade..."
           expanded
           @select="option => selected = option"
           >
           <template slot="empty">Especialidade não encontrada</template>
          </b-autocomplete>
          <button class="button is-info" style="padding-right:10px;">Buscar </button>
        </b-field>

        <b-field grouped v-if = "selected != null">
          <b-field expanded style="padding-left: 10px;">
            <b-datepicker
              :show-week-number="showWeekNumber"
              placeholder="Clique para selecionar a data"
              >
            </b-datepicker>
          </b-field>

          <b-field style="padding-right: 10px;" expanded>
            <b-timepicker
                placeholder="Clique para selecionar a hora"
                :enable-seconds="enableSeconds"
                :hour-format="format">
            </b-timepicker>
          </b-field>
        </b-field>
      </b-step-item>

      <b-step-item label="Médico" :clickable="isStepsClickable" type="is-info">
          Lorem ipsum dolor sit amet.<br>
          Lorem ipsum dolor sit amet.
      </b-step-item>

      <b-step-item label="Revisão" :clickable="isStepsClickable" >
          Lorem ipsum dolor sit amet.<br>
          Lorem ipsum dolor sit amet.<br>
          Lorem ipsum dolor sit amet.<br>
          Lorem ipsum dolor sit amet.
      </b-step-item>
    </b-steps>
  </section>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import axios from 'axios';

Vue.use(VeeValidate, {
  events: ''
})

export default {
  data() {
   return {
     data: [
       'Endócrinologia',
       'Pediatria',
       'Ortopedia',
       'Urologia',
       'Nutrição',
       'Oftalmologia',
       'Dermatologia',
       'Mastologia',
       'Nefrologia',
       'Hematologia',
      ],
      name: '',
      selected: null,
      showWeekNumber: false,
      formatAmPm: false,
      enableSeconds: false,
      activeStep: 0,
      isAnimated: true,
      isStepsClickable: true,
    }
  },
computed: {
   filteredDataArray() {
     return this.data.filter((option) => {
       return option
           .toString()
           .toLowerCase()
           .indexOf(this.name.toLowerCase()) >= 0
     })
   },
   format() {
            return this.formatAmPm ? '12' : '24'
    }
  }
}
</script>


    <style>
    .header {
      text-align: center;
      font-size: 50px;
      font-family: "Courier";
      font-weight: bold;
      color:#f0f2f5;
    }
    .backgroundPainting {
      background-color: #7ea2d9;
      height:950px;
    }
    .buttonPosition {
      padding-left: 80px;
    }
    </style>
