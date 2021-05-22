<template>
  <div class="cart-item-card">
    <div class="header">
      <h3>{{ product.name }}</h3>
      <h4>In Cart: {{ product.quantity }}</h4>
      <h4>Total Cost: {{ item_cost.toFixed(2) }}</h4>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: ["product"],
  setup(props) {
    const description = computed(() =>
      props.product.description.substring(0, 120)
    );
    const item_cost = computed(
      (): number => props.product.price * props.product.quantity
    );
    return {
      item_cost,
      description,
    };
  },
});
</script>

<style lang="scss" scoped>
.cart-item-card {
  width: 90%;
  margin: 5%;
  background-color: white;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;
  padding: 10px;
  text-align: left;
  .header {
    display: flex;
    justify-content: space-around;
  }
}
</style>
