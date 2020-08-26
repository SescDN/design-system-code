<template>
  <div>
    <v-card>
      <v-toolbar flat color="primary" dark>
        <v-toolbar-title class="text-xs-center">
          <img src="/sesc-logo.png" />
        </v-toolbar-title>
      </v-toolbar>

      <v-tabs vertical dark>
        <v-tab>
          <v-icon left>mdi-account</v-icon>Opção 1
        </v-tab>

        <v-tab>
          <v-icon left>mdi-lock</v-icon>Opção 2
        </v-tab>
        <v-tab>
          <v-icon left>mdi-access-point</v-icon>Opção 3
        </v-tab>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p class="white--text">
                Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat
                lorem non metus. Sed a libero.
              </p>
              <p class="white--text">
                Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus,
                bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis.
                Suspendisse non nisl sit amet velit hendrerit rutrum.
              </p>
              <p class="white--text">
                Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor,
                tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p class="white--text">
                Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante
                convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices
                tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula
                sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
              </p>
              <p class="white--text">
                Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante
                convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet
                ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac
                habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
              </p>
              <p class="white--text">
                Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi
                a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis
                vitae tortor. Aliquam eu nunc.
              </p>
              <p class="white--text">
                Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra
                rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
              </p>
              <p class="white--text">
                onec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget,
                vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim
                turpis, dictum sed, iaculis a, condimentum nec, nisi.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p class="white--text">
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin
                viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi
                mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              </p>
              <p class="white--text">
                Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum,
                porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class VerticalTabsComponentClass extends Vue {}
</script>