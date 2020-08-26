<template>
  <div>
    <v-alert :value="true" type="success">Este é um alerta de sucesso.</v-alert>

    <v-alert :value="true" type="info">Este é um alerta de informação.</v-alert>

    <v-alert :value="true" type="warning">Este é um alerta de atenção.</v-alert>

    <v-alert :value="true" type="error">Este é um alerta de erro.</v-alert>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AlertasComponentClass extends Vue {}
</script>