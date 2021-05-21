<template>
  <div class="home">
    <ProductDescriptionDrawer
      :product="product"
      :active="active.product_drawer"
      v-on:close-product-drawer="closeProductDrawer()"
    />
    <div class="products-cards-container">
      <ProductSummaryCard
        v-for="product in items"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import items from "../data/items";
import ProductSummaryCard from "../components/products/ProductSummaryCard.vue";
import ProductDescriptionDrawer from "../components/products/ProductDescriptionDrawer.vue";

export default defineComponent({
  name: "Home",
  components: {
    ProductSummaryCard,
    ProductDescriptionDrawer,
  },
  setup() {
    const state = reactive({
      items: items,
      product: null,
      active: {
        product_drawer: false,
      },
    });
    const viewProduct = (product: any) => {
      state.product = product;
      state.active.product_drawer = true;
      console.log(state.product);
    };
    const closeProductDrawer = () => {
      state.active.product_drawer = false;
    };

    return {
      ...toRefs(state),
      viewProduct,
      closeProductDrawer,
    };
  },
});
</script>

<style lang="scss" scoped>
.product-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
