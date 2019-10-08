/*
* @Author: Hovees
* @Date: 2019-10-08 14:50:53
* @Last Modified by: Hovees-hwx
* @Last Modified time: 2019-10-08 14:50:53
*/

<template>
  <div class="property">
    <property-show-model/>
  </div>
</template>

<script>
  import propertyShowModel from "../../components/property/propertyShowListModel";
  export default {
    name: "property",
    components: {
      propertyShowModel
    }
  }
</script>

<style scoped>

</style>