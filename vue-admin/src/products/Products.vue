<template>
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>
            <router-link
              :to="`/users/${user.id}/edit`"
              class="btn btn-sm btn-outline-secondary"
            >
              Edit
            </router-link>
            <div
              href="javascript:void(0)"
              class="btn btn-sm btn-outline-secondary"
              @click="del(user.id)"
            >
              Delete
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Products",
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>
