<template>
  <div class="page">
    <div class="page__inner">
      <div class="page__inner--left">
        <div class="field">
          <label for="">Company Name &nbsp;&nbsp;</label>
          <input type="text" placeholder="Company Name">
        </div>
        <div class="field">
          <label for="">Address 1 &nbsp;&nbsp;</label>
          <input type="text" placeholder="Address 1">
        </div>
        <div class="field">
          <label for="">Address 2 &nbsp;&nbsp;</label>
          <input type="text" placeholder="Address 2">
        </div>
        <div class="field">
          <label for="">City &nbsp;&nbsp;</label>
          <input type="text" placeholder="City">
        </div>
      </div>
      <div class="page__inner--right">
       <div class="field">
          <label for="">State &nbsp;&nbsp;</label>
          <input type="text" placeholder="State">
        </div>
        <div class="field">
          <label for="">Zip Code &nbsp;&nbsp;</label>
          <input type="text" placeholder="Zip Code">
        </div>
        <div class="field">
          <label for="">Country &nbsp;&nbsp;</label>
          <input type="text" placeholder="Country">
        </div>
      </div>
    </div>

    <hr />

     <div class="page__inner">
      <div class="page__inner--left">
        <div class="field">
          <label for="">Company Name &nbsp;&nbsp;</label>
          <input type="text" placeholder="Company Name">
        </div>
        <div class="field">
          <label for="">Address 1 &nbsp;&nbsp;</label>
          <input type="text" placeholder="Address 1">
        </div>
        <div class="field">
          <label for="">Address 2 &nbsp;&nbsp;</label>
          <input type="text" placeholder="Address 2">
        </div>
        <div class="field">
          <label for="">City &nbsp;&nbsp;</label>
          <input type="text" placeholder="City">
        </div>
      </div>
      <div class="page__inner--right">
       <div class="field">
          <label for="">State &nbsp;&nbsp;</label>
          <input type="text" placeholder="State">
        </div>
        <div class="field">
          <label for="">Zip Code &nbsp;&nbsp;</label>
          <input type="text" placeholder="Zip Code">
        </div>
        <div class="field">
          <label for="">Country &nbsp;&nbsp;</label>
          <input type="text" placeholder="Country">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.field {
  margin: 5px 0;
  // border: 1px solid red;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.page {
    width: 50%;
    margin: 0 auto;

    &__inner {
      width: 100%;
      display: flex;
      justify-content: space-evenly;

      &--left {
        display: flex;
        flex-direction: column;
      }
    }
}

</style>
