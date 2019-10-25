/*
 * @Author: Hovees 
 * @Date: 2019-10-25 14:30:09 
 * @Last Modified by:   Hovees-hwx 
 * @Last Modified time: 2019-10-25 14:30:09 
 */
 
<template>
  <div class="add-house-dialog">
    <el-dialog width="500px" :visible="show" center @close="clickClose" title="新增房屋">

    </el-dialog>
  </div>
</template>

<script>
  import houseService from "../../service/house/houseService";
  export default {
    name: "addHouseDialog",
    data() {
      let checkNumber = (rule, value, callback) => {
        if (value === '' || value === undefined) {
          callback(new Error('门牌号不能为空'))
        } else if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          setTimeout(() => {
            let res = houseService.checkBuildingHouseNumber(value)
            res.then(response => {
              if (response.flag) {
                callback()
              } else {
                callback(new Error(response.message))
              }
            })
          }, 500)
        }
      }
      return {
        addHouseModel: {
          number: '',
          area: '',
          direction: '',
          floor: '',
          ownerName: ''
        }
      }
    }
  }
</script>

<style scoped>

</style>