<template>
  <div>
    <h1>Users List</h1>
    <ul>
      <li v-for="user in users" :key="user._id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UsersList",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      console.log("getting users");
      try {
        const response = await axios.get("/api/users");
        this.users = response.data;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
  },
};
</script>
