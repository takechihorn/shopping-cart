<template>
  <div class="cart-item-card">
    <h3>Cart Total: ${{ cart_total.toFixed(2) }}</h3>
    <button class="view-product-button">Pay by Credit Card</button>
  </div>
</template>

<script lang="ts">
import { store } from "@/store/index";
import { defineComponent, computed } from "vue";

export default defineComponent({
  setup() {
    const cart_total = computed((): number => store.getters.cartTotal);
    return {
      cart_total,
    };
  },
});
</script>

<style lang="scss" scoped>
button.view-product-button {
  padding: 10px;
  background-color: rgb(79, 160, 187);
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.15rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>
