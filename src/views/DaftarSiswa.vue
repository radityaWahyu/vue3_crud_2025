<script setup>
import { ref, onMounted, reactive } from 'vue'
import api from '../services/api'

const items = ref([])
const fetchLoading = ref(false)

const fetchItems = async () => {
  try {
    fetchLoading.value = true
    const response = await api.get('/siswa')

    console.log(response.data.data)
    items.value = response.data.data
  } catch (error) {
    console.log(error)
  } finally {
    fetchLoading.value = false
  }
}

const formData = reactive({
  nama: '',
  alamat: '',
})

const submitForm = async () => {
  try {
    const response = await api.post('/siswa', formData)

    console.log(response)

    formData.nama = ''
    formData.alamat = ''

    fetchItems()
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchItems()
})
</script>
<template>
  <div class="space-y-4">
    <div>
      <form class="max-w-sm mx-auto" @submit.prevent="submitForm()">
        <h2 class="text-center text-lg font-semibold py-4">Form Tambah data</h2>
        <div class="mb-5">
          <label for="nama" class="block mb-2 text-sm font-medium text-gray-900">Nama</label>
          <input
            type="text"
            id="nama"
            v-model="formData.nama"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Inputkan nama"
            required
          />
        </div>
        <div class="mb-5">
          <label for="alamat" class="block mb-2 text-sm font-medium text-gray-900">Alamat</label>
          <input
            type="text"
            id="alamat"
            v-model="formData.alamat"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Inputkan alamat..."
            required
          />
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Kirim Data
        </button>
      </form>
    </div>
    <div class="px-4">
      <h2
        class="py-4 mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 text-center"
      >
        Ini adalah halaman untuk menampilkan data siswa dengan AXIOS
      </h2>

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-100 uppercase bg-gray-700">
            <tr>
              <th scope="col" class="px-6 py-3">ID SISWA</th>
              <th scope="col" class="px-6 py-3">NAMA SISWA</th>
            </tr>
          </thead>
          <tbody v-if="fetchLoading">
            <tr class="bg-white border-b border-gray-200">
              <td
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                colspan="2"
              >
                Mengambil data...
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr
              class="bg-white border-b border-gray-200"
              v-for="item in items"
              v-bind:key="item.id"
            >
              <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {{ item.id_siswa }}
              </td>
              <td class="px-6 py-4">{{ item.nama_siswa }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
