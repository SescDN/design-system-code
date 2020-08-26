<template>
  <div>
    <v-progress-linear value="15"></v-progress-linear>
    <br />
    <v-progress-linear v-model="valueDeterminate" color="amber"></v-progress-linear>
    <br />
    <v-progress-linear indeterminate color="yellow darken-2"></v-progress-linear>
    <br />
    <v-progress-linear v-model="value" :buffer-value="bufferValue"></v-progress-linear>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class BarraProgressoComponentClass extends Vue {
  private valueDeterminate: number = 50;
  private value: number = 10;
  private bufferValue: number = 20;
  private interval: number = 0;

  private startBuffer(): void {
    clearInterval(this.interval);

    this.interval = setInterval(() => {
      this.value += Math.random() * (15 - 5) + 5;
      this.bufferValue += Math.random() * (15 - 5) + 6;
    }, 2000);
  }

  private mounted(): void {
    this.startBuffer();
  }

  private beforeDestroy(): void {
    clearInterval(this.interval);
  }

  @Watch("value")
  onValueChange(val: number) {
    if (val < 100) return;

    this.value = 0;
    this.bufferValue = 10;
    this.startBuffer();
  }
}
</script>