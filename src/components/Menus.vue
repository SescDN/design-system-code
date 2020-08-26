<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
          class="text-initial"
          depressed
        >
          Menu Dropdown
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title class="ml-1">{{ item.title }}<br><br></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<style scoped>
    .text-initial {
        text-transform: initial;
    }
</style>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Início' },
        { title: 'Equipes' },
        { title: 'Projetos' },
        { title: 'Orçamentos' },
      ],
    }),
  }
</script>