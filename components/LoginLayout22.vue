<template>
  <!-- <el-row>
    <el-col :span="24"><div class="grid-content" /></el-col>
  </el-row>
  <el-row>
    <el-col :span="12"><div class="grid-content" /></el-col>
    <el-col :span="12"><div class="grid-content" /></el-col>
  </el-row>
  <el-row>
    <el-col :span="8"><div class="grid-content" /></el-col>
    <el-col :span="8"><div class="grid-content" /></el-col>
    <el-col :span="8"><div class="grid-content" /></el-col>
  </el-row>
  <el-row>
    <el-col :span="6"><div class="grid-content" /></el-col>
    <el-col :span="6"><div class="grid-content" /></el-col>
    <el-col :span="6"><div class="grid-content" /></el-col>
    <el-col :span="6"><div class="grid-content" /></el-col>
  </el-row> -->



  <el-row justify="end">
    <el-col :span="12"></el-col>
    <el-col :span="12">
       <div class="btn_grp">
        <!-- <el-button type="primary" :icon="Edit" />
        <el-button type="primary" :icon="Share" /> 
        <el-button type="primary" :icon="Delete" /> -->
        <!-- <el-button type="primary" :icon="Search">Search</el-button> -->
        <el-button type="primary">
          Edit<el-icon class="el-icon--right"><Edit /></el-icon>
        </el-button>
        <el-button type="primary">
          Share<el-icon class="el-icon--right"><Share /></el-icon>
        </el-button>
        <el-button type="primary">
          Delete<el-icon class="el-icon--right"><Delete /></el-icon>
        </el-button>
        <el-button type="primary">
          Search<el-icon class="el-icon--right"><Search /></el-icon>
        </el-button>
        <el-button type="primary" disabled>
          Upload<el-icon class="el-icon--right"><Upload /></el-icon>
        </el-button>
      </div>
  </el-col>
  </el-row>



  <el-row :gutter="10">
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
  </el-row>
  <el-row :gutter="10">
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
  </el-row>
  <el-row :gutter="10">
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
  </el-row>
  <el-row :gutter="10">
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
    <el-col :span="4"><div class="grid-content" /></el-col>
  </el-row>
  <el-row :gutter="10" justify="space-between">
    <el-col :span="6"><div class="grid-content" /></el-col>
    <el-col :span="6"><div class="grid-content" /></el-col>
    <el-col :span="6"><div class="grid-content" /></el-col>
  </el-row>
  <el-row :gutter="10" justify="space-around">
    <el-col :span="6"><div class="grid-content" /></el-col>
    <el-col :span="6"><div class="grid-content" /></el-col>
    <el-col :span="6"><div class="grid-content" /></el-col>
  </el-row>
  <el-row :gutter="10" justify="space-evenly">
    <el-col :span="6"><div class="grid-content" /></el-col>
    <el-col :span="6"><div class="grid-content" /></el-col>
    <el-col :span="6"><div class="grid-content" /></el-col>
  </el-row>
  <el-row :gutter="10" justify="center">
    <el-col :span="6"><div class="grid-content">1</div> </el-col>
    <el-col :span="6"><div class="grid-content">1</div> </el-col>
    <el-col :span="6"><div class="grid-content">1</div> </el-col>
  </el-row>

  <el-row :gutter="10" justify="center">
      <el-col :span="20">
      <el-space wrap>
        <el-card v-for="i in 20" :key="i" class="box-card" style="width: 250px">
          <template #header>
            <div class="card-header">
              <span>Card name</span>
              <el-button type="primary" class="button" >Operation button</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{ 'List item ' + o }}
          </div>
        </el-card>
      </el-space>
    </el-col>
</el-row>


</template>

<style lang="scss">
.el-row {
  margin-bottom: 10px;
}

.box-card {
  margin : 4px ;
}

.btn_grp {
  display : flex ;
  justify-content: flex-end ;
  margin : 12px ;
}
</style>
