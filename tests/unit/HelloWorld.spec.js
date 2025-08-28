// Importa las utilidades necesarias de Vue Test Utils y Jest
import { shallowMount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

// Importamos axios para poder simular sus llamadas
import axios from 'axios'
import VueAxios from 'vue-axios'

// Importamos Vuetify para su configuración
import Vuetify from 'vuetify'

// Simula completamente el módulo axios para evitar llamadas reales a la API
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })), // Simula una respuesta exitosa para GET
  post: jest.fn(() => Promise.resolve()), // Simula una respuesta exitosa para POST
  delete: jest.fn(() => Promise.resolve()) // Simula una respuesta exitosa para DELETE
}))

// Describe el conjunto de pruebas para el componente HelloWorld
describe('HelloWorld.vue', () => {

  // Crea una instancia de Vue local para evitar la contaminación global del estado
  const localVue = createLocalVue();

  // Usa vue-axios en la instancia local de Vue
  localVue.use(VueAxios, axios);

  // Limpia los "mocks" después de cada prueba para evitar interferencias
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('debería montarse correctamente y no mostrar el mensaje de error inicialmente', () => {
    const vuetify = new Vuetify();
    const wrapper = shallowMount(HelloWorld, {
      localVue, // Pasa la instancia local de Vue al wrapper
      vuetify, // Pasa la instancia de Vuetify al wrapper
      stubs: ['v-container', 'v-row', 'v-col', 'v-text-field', 'v-btn', 'v-list', 'v-list-item', 'v-list-item-title', 'v-alert']
    });
    // Verifica que el componente se ha montado
    expect(wrapper.exists()).toBe(true);
    // Verifica que el mensaje de error no está visible
    expect(wrapper.find('v-alert').exists()).toBe(false);
  });

  it('debería agregar una nueva tarea correctamente', async () => {
    const vuetify = new Vuetify();
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      vuetify,
      stubs: ['v-container', 'v-row', 'v-col', 'v-text-field', 'v-btn', 'v-list', 'v-list-item', 'v-list-item-title', 'v-alert']
    });
    const nuevaTareaNombre = 'Nueva Tarea de Prueba';

    // Mockea la función 'cargarDatos' para simular la actualización del estado
    wrapper.vm.cargarDatos = jest.fn(() => {
      wrapper.vm.tareas = [{ id: 1, nombre: nuevaTareaNombre, hecho: false }];
    });

    // Simula la entrada del usuario en el campo de texto
    const input = wrapper.find('v-text-field');
    await input.vm.$emit('input', nuevaTareaNombre);

    // Espera que el DOM se actualice
    await wrapper.vm.$nextTick();

    // Simula el clic en el botón "Agregar"
    const addButton = wrapper.find('v-btn');
    addButton.trigger('click');

    // Espera a que las promesas se resuelvan y el DOM se actualice
    await wrapper.vm.$nextTick();

    // Verificaciones
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.cargarDatos).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.tareas[0].nombre).toBe(nuevaTareaNombre);
  });

  it('debería eliminar una tarea correctamente', async () => {
    const vuetify = new Vuetify();
    // Montamos el componente con datos iniciales
    const tareasIniciales = [{ id: 1, nombre: 'Tarea a eliminar', hecho: false, _id: '123' }];
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      vuetify,
      stubs: ['v-container', 'v-row', 'v-col', 'v-text-field', 'v-btn', 'v-list', 'v-list-item', 'v-list-item-title', 'v-alert'],
      data() {
        return {
          tareas: tareasIniciales
        };
      }
    });

    // Mockea la función 'cargarDatos' para simular la lista vacía después de eliminar
    wrapper.vm.cargarDatos = jest.fn(() => {
      wrapper.vm.tareas = [];
    });
    
    // Encuentra el botón de eliminar
    const deleteButton = wrapper.find('v-btn');
    deleteButton.trigger('click');

    // Espera a que las promesas se resuelvan
    await wrapper.vm.$nextTick();

    // Verificaciones
    expect(axios.delete).toHaveBeenCalledWith('/tareas/delete/' + tareasIniciales[0]._id);
    expect(wrapper.vm.cargarDatos).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.tareas.length).toBe(0);
  });
});
