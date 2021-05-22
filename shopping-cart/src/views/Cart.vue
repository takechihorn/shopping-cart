<template>
  <div>
    <h1>Your Cart</h1>
    <CartItemCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    <CartSummaryPaymentCard />
  </div>
</template>

<script lang="ts">
import { store } from "@/store/index";
import { computed, defineComponent } from "vue";
import CartItemCard from "../components/cart/CartItemCard.vue";
import CartSummaryPaymentCard from "../components/cart/CartSummaryPaymentCard.vue";

export default defineComponent({
  components: {
    CartItemCard,
    CartSummaryPaymentCard,
  },
  setup() {
    const products = computed(() => store.getters.cartItems);
    return {
      products,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
