<template>
  <v-tabs dark slider-color="yellow" background-color="primary">
    <v-tab ripple>Template</v-tab>
    <v-tab ripple>Código</v-tab>
    <v-tab ripple>Script</v-tab>
    <v-tab-item>
      <v-card flat>
        <template>
          <v-treeview dark :items="items"></v-treeview>
        </template>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <pre class="language-html">
          <code class="language-html">
    &lt;template&gt;
        &lt;div&gt;

            &lt;v-treeview :items=&quot;items&quot;&gt;&lt;/v-treeview&gt;
       
        &lt;/div&gt;
    &lt;/template&gt;
          </code>
          </pre>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <pre class="language-js">
          <code class="language-js">
    &#x3C;script lang=&#x22;ts&#x22;&#x3E;

      import { Component, Vue } from &#x22;vue-property-decorator&#x22;;

      interface Items {
          id: number;
          name: string;
          children: { id: number; name: string }[];
      }

      @Component
      export default class TreeviewComponentClass extends Vue {
          private items: Items[] = [
              {
                  id: 1,
                  name: &#x22;Sistemas:&#x22;,
                  children: [
                      { id: 2, name: &#x22;SGS&#x22; },
                      { id: 3, name: &#x22;SGF&#x22; },
                      { id: 4, name: &#x22;SescPro&#x22; }
                  ]
              }
          ];
      }

    &#x3C;/script&#x3E;
          </code>
          </pre>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

interface Items {
  id: number;
  name: string;
  children: { id: number; name: string }[];
}

@Component
export default class TreeviewComponentClass extends Vue {
  private items: Items[] = [
    {
      id: 1,
      name: "Sistemas:",
      children: [
        { id: 2, name: "SGS" },
        { id: 3, name: "SGF" },
        { id: 4, name: "SescPro" }
      ]
    }
  ];
}
</script>