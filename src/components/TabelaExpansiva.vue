<template>
  <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      show-select
      :expanded.sync="expanded"
      item-key="name"
      class="bg-tabela scheduler"
      @click:row="expandir"
      locale="pt-BR"
      hide-action
      dark
    >
      <template v-slot:top>
        <v-dialog dark v-model="dialog" max-width="500px" style="z-index: 11px;">
          <v-card dark class="filtro-transparente-pesquisa">
            <v-card-title dark class="filtro-header-modal filtro-desfocado titulo-modal">
              <span class="headline">
                <span class="mdi mdi-pencil"></span>
                {{ formTitle }}
              </span>
              <v-spacer></v-spacer>
              <span class="mdi mdi-close"></span>
            </v-card-title>

            <v-card-text dark style="background-color: #2A3944;">
              <v-container>
                <v-btn text large class="text-capitalize btn-agendamento"><span class="mdi mdi-plus accent-1"></span> Novo Agendamento</v-btn>
                <v-switch color="#02B3C5" label="A partir de sexta, 25/12/2020" value="A partir de sexta, 25/12/2020"></v-switch>
                <v-switch color="#02B3C5" label="A partir de sexta, 25/12/2020" value="A partir de sexta, 25/12/2020"></v-switch>
                <v-switch color="#02B3C5" label="A partir de sexta, 25/12/2020" value="A partir de sexta, 25/12/2020"></v-switch>
                <v-switch color="#02B3C5" label="A partir de sexta, 25/12/2020" value="A partir de sexta, 25/12/2020"></v-switch>
                  

                <!-- Descomentar para usar Edição de usuário
                
                Editar Usuário <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field v-model="editedItem.name" label="Empresa"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field v-model="editedItem.calories" label="Setor"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field v-model="editedItem.fat" label="Nome completo"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model="editedItem.carbs" label="CPF"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model="editedItem.protein" label="Telefone"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field v-model="editedItem.fat" label="Email"></v-text-field>
                    </v-col>
                </v-row>-->
              </v-container>
            </v-card-text>

            <!--<v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text color="#FFF" class="text-capitalize" @click="close">Cancelar</v-btn>

                <v-btn text color="#02B3C5" class="text-capitalize" @click="save">Salvar</v-btn>
            </v-card-actions>-->
          </v-card>
        </v-dialog>
      </template>

      <!-- <template v-slot:body :items="desserts">
        <tr v-for="item in desserts" v-bind:key="item.id" style="background-color: #162834;">
          <td :colspan="1" style="background-color: #162834;">
            <v-card-text class="">{{item.name}}</v-card-text>
          </td>
          <td :colspan="1" style="background-color: #162834;">
            <v-card-text class="">{{item.name}}</v-card-text>
          </td>
           <td :colspan="1" style="background-color: #162834;">
            <v-card-text class="">{{item.name}}</v-card-text>
          </td>
        </tr>
      </template>-->

      <template v-slot:expanded-item="{ headers }">
        <td :colspan="1" style="background-color: #162834;">
          <v-card-text class></v-card-text>
        </td>
        <td :colspan="1" style="background-color: #162834;">
          <v-card-text class="accent-1 white--text">Sucesso</v-card-text>
        </td>
        <td :colspan="headers.length - 2" style="background-color: #162834;">
          <v-card-text class="white--text">Quinta-Feira, 20/05/2020, de 11:00:05 a 11:00:05</v-card-text>
        </td>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-tooltip left color="#2A3944">
          <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on">
              <v-icon small class="mr-2 hovered">mdi-plus</v-icon>
            </span>
          </template>
          <span>Adicionar</span>
        </v-tooltip>
        <v-tooltip left color="#2A3944">
          <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on">
              <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
            </span>
          </template>
          <span>Editar</span>
        </v-tooltip>
        <v-tooltip left color="#2A3944">
          <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on">
              <v-icon small class="mr-2">mdi-lock</v-icon>
            </span>
          </template>
          <span>Bloquear</span>
        </v-tooltip>
        <v-tooltip left color="#2A3944">
          <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on">
              <v-icon small class="mr-2" @click="deleteItem(item)">mdi-delete</v-icon>
            </span>
          </template>
          <span>Excluir</span>
        </v-tooltip>
      </template>
    </v-data-table>
</template>

<script>
export default {
  data: () => ({
    styleElement: null,
    dialog: false,
    expanded: [],
    headers: [
      {
        text: "Status",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "Últ. Execução", value: "calories" },
      { text: "Rotina", value: "fat" },
      { text: "Agendamentos", value: "carbs" },
      { text: "", value: "actions", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    selectedItem: false
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "" : "Editar";
    },
    style() {
      if (this.dialog) {
        return `
          .v-overlay.v-overlay--active {
            backdrop-filter: blur(3px);
          }
        `;
      }
      return "";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    style: function(style) {
      if (this.styleElement) {
        this.styleElement.parentNode.removeChild(this.styleElement);
      }
      this.styleElement = this.applyStyle(style);
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    expandir(value) {
      const index = this.expanded.indexOf(value);
      if (index === -1) {
        this.expanded.push(value);
      } else {
        this.expanded.splice(index, 1);
      }
    },

    applyStyle(styleDef) {
      let styleElement = document.createElement("style");
      styleElement.type = "text/css";
      document.head.appendChild(styleElement);
      styleElement.innerHTML = styleDef;
      return styleElement;
    },
    initialize() {
      this.desserts = [
        {
          id: 1,
          name: "Ativo",
          calories: "Sucesso",
          fat: "Importar Dados de Funcionários",
          carbs: "Todos os dias às 18h"
        },
        {
          id: 2,
          name: "Pausado",
          calories: "Falha",
          fat: "Importar Cargos do Totvs",
          carbs: "Todos os dias às 18h"
        },
        {
          id: 3,
          name: "Falha",
          calories: "Sucesso",
          fat: "Importar Sessões do Totvs",
          carbs: "Todos os dias às 18h"
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style scoped>
/* Tabela */
.bg-tabela {
    background-color: #2A3944 !important;
}

.theme--dark.v-data-table > .v-data-table__wrapper > table > thead > tr:last-child > th {
    border-bottom: 2px thin solid #162834 !important;
}

.theme--dark.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
    background: rgba(42, 57, 68, 1) !important;
    color: white !important;
    -webkit-transition: background .5s ease-out;
  -moz-transition: background .5s ease-out;
  -o-transition: background .5s ease-out;
  transition: background .5s ease-out;
}

.theme--dark.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
    background: rgba(2, 179, 197, 0.2) !important;
    cursor: pointer;
}

.theme--dark.v-toolbar.v-sheet {
    background-color: rgba(24, 27, 31, 0.9) !important;
}

.scheduler table tr {
    border-left: 3px solid green !important;
    border-radius: 2px;
 }

 .filtro-desfocado {
    backdrop-filter: blur(5px) !important;
 }

 .filtro-transparente-pesquisa {
    background-color: rgba(0, 0, 0, 0.2) !important;
}

.filtro-header-modal {
    background-color: rgba(0, 0, 0, 0.3) !important;
}

.filtro-modal {
    background-color: rgba(0, 0, 0, 0.3) !important;
}

.theme--dark.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
    color: rgba(255, 255, 255, 1);
    color: #FFF !important;
    font-size: 14px;
    font-weight: 400;
}

#menu a,
.v-icon,
.theme--dark.v-data-table
{
    color: #FFF !important;
}

.home .v-data-table__wrapper {
    overflow-y: visible;
    overflow-x: visible;
  }

td ::content(Ativo),
td::content(Ativo) {

  color:tomato!important;
}

.v-date-picker-header {
    padding: 4px 16px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    position: relative;
    background: rgba(0,0,0,0.5) !important;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 2s
  }
  .fade-enter, .fade-leave-to  {
    opacity: 0
  }




  table.table {
    margin:0 auto;
    width: 98%;
    max-width: 98%;
}

.datatable-cell-wrapper {
    width: inherit;
    position: relative;
    z-index: 4;
    padding: 10px 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.datatable__expand-content .card__text {
    z-index: 3;
    position: relative;
}
.datatable-container {
    position: absolute;
    background-color: white;
    top: -50px;
    left: -14px;
    right: -14px;
    bottom: 0;
    z-index: 2;
    border:1px solid #ccc;
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.15), 0 1px 10px 0 rgba(0,0,0,0.15), 0 2px 4px -1px rgba(0,0,0,0.2);
}


.theme--dark.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
    background: rgba(42, 57, 68, 1) !important;
    transition: background .5s ease-out;
}

/* Modal */
.titulo-modal {
    padding: 20px !important;
    background-color: rgba(0, 0, 0, 0.2) !important;
    backdrop-filter: blur(2px);
}

.v-card__title.filtro-header-modal.filtro-desfocado.titulo-modal {
    padding: 25px !important;
}

button.text-capitalize.btn-agendamento.v-btn.v-btn--flat.v-btn--text.theme--dark.v-size--large {
    font-size: 16px;
    font-weight: 400;
    padding: 0px !important;
}


.v-icon {
  margin-right: 3px!important;
  padding:5px;
  opacity:0;
  border-radius: 100%;
  background: rgba(0,0,0,0.0);;
  transition-delay: 10ms;
}

tr {
  transition-delay: 1000ms;
}

tr:hover .v-icon {
  opacity:1;
}

.v-icon:hover {
  background: rgba(0,0,0,0.2);;
}
.v-application .ml-15 {
  margin-left:0 !important
}
.v-card__subtitle, .v-card__text, .v-card__title {
  padding:0!important
}

tr.v-data-table__expanded td {
  position: relative;
}

tr.v-data-table__expanded td:first-child > div:before{
    content: " ";
    height: calc(100% + 48px);
    width: 4px;
    background: #02b3c5;
    position: absolute;
    top: -48px;
    left: -4px;
}

tr.v-data-table__expanded.v-data-table__expanded__row + tr td:first-child .v-card__text:before {
  border-end-start-radius: 100%;
  border-radius: 6px 0px 0px 60px;
}

.v-data-table__wrapper {
  overflow-y: visible;
  overflow-x: visible;
}
</style>