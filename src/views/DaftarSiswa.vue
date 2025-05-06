<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const items = ref([])

const fetchItems = async () => {
  try {
    const response = await api.get('/siswa')

    console.log(response.data.data)
    items.value = response.data.data
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchItems()
})
</script>
<template>
  <div>
    <h2
      class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center"
    >
      Ini adalah halaman untuk menampilkan data siswa dengan AXIOS
    </h2>

    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">ID SISWA</th>
            <th scope="col" class="px-6 py-3">NAMA SISWA</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
            v-for="item in items"
            v-bind:key="item.id"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ item.id_siswa }}
            </th>
            <td class="px-6 py-4">{{ item.nama_siswa }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
