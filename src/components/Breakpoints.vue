<template>
  <div class="mb-12 v-card v-card--outlined v-sheet theme--dark">
    <div class="v-data-table theme--dark">
      <div class="v-data-table__wrapper">
        <table>
          <caption class="pa-4">Viewport Breakpoints</caption>
          <thead>
            <tr class="text-left">
              <th>Dispositivo</th>
              <th>Código</th>
              <th>Tipos</th>
              <th>Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <i
                  aria-hidden="true"
                  class="v-icon notranslate v-icon--left mdi mdi-cellphone-iphone theme--dark"
                ></i>
                <span>Extra pequeno</span>
              </td>
              <td>
                <strong>xs</strong>
              </td>
              <td>Dispositivo pequeno a grande</td>
              <td>&lt; 600px</td>
            </tr>
            <tr>
              <td>
                <i
                  aria-hidden="true"
                  class="v-icon notranslate v-icon--left mdi mdi-tablet theme--dark"
                ></i>
                <span>Pequeno</span>
              </td>
              <td>
                <strong>sm</strong>
              </td>
              <td>tablet pequeno para médio</td>
              <td>600px &gt; &lt; 960px</td>
            </tr>
            <tr>
              <td>
                <i
                  aria-hidden="true"
                  class="v-icon notranslate v-icon--left mdi mdi-laptop theme--dark"
                ></i>
                <span>Médio</span>
              </td>
              <td>
                <strong>md</strong>
              </td>
              <td>tablet grande até laptop</td>
              <td>960px &gt; &lt; 1264px*</td>
            </tr>
            <tr>
              <td>
                <i
                  aria-hidden="true"
                  class="v-icon notranslate v-icon--left mdi mdi-monitor theme--dark"
                ></i>
                <span>grande</span>
              </td>
              <td>
                <strong>lg</strong>
              </td>
              <td>desktop</td>
              <td>1264px* &gt; &lt; 1904px*</td>
            </tr>
            <tr>
              <td>
                <i
                  aria-hidden="true"
                  class="v-icon notranslate v-icon--left mdi mdi-television theme--dark"
                ></i>
                <span>Extra grande</span>
              </td>
              <td>
                <strong>xl</strong>
              </td>
              <td>4k e ultra-wides</td>
              <td>&gt; 1904px*</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-center">
                <small>
                  <em class="grey--text">* -16px no Desktop</em>
                </small>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BreakpointsComponentClass extends Vue {}
</script>

<style scoped>
.theme--dark.v-data-table {
    background-color: #11202b !important;
    color: #e1e1e1 !important;
}
</style>