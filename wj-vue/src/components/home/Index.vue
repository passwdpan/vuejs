<template>
	<div>
	<div class="FBI">
	<el-alert
	    title="成功提示的文案"
	    type="success"
		  center
	    description="文字说明文字说明文字说明文字说明文字说明文字说明"
	    show-icon>
	  </el-alert>
	  <el-alert
	    title="消息提示的文案"
	    type="info"
		  center
	    description="文字说明文字说明文字说明文字说明文字说明文字说明"
	    show-icon>
	  </el-alert>
	  <el-alert
	    title="警告提示的文案"
	    type="warning"
		  center
	    description="文字说明文字说明文字说明文字说明文字说明文字说明"
	    show-icon>
	  </el-alert>
		<br />
	  <el-alert
	    title="错误提示的文案"
	    type="error"
		  center
	    description="文字说明文字说明文字说明文字说明文字说明文字说明"
	    show-icon>
	  </el-alert>
	</div>
	 <div class='btn-view'>
	
  <div class="aniu">
	  <el-button-group>
	    <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
	   
	  </el-button-group>
	 &#12288; &#12288; &#12288; &#12288; &#12288; &#12288; &#12288; &#12288; &#12288; &#12288; &#12288; &#12288; &#12288; 
	  <el-button-group>
	    <!-- <el-button type="primary" icon="el-icon-edit"></el-button>
	    <el-button type="primary" icon="el-icon-share"></el-button> -->
	    <!-- <el-button type="primary" icon="el-icon-delete"></el-button> -->
		 <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
	  </el-button-group>
  </div>
 </div>
 </div>
</template>
<script>
  export default {
    name: 'Index'
  }
</script>

<style scoped>
  .FBI {
  width: 100%;
    padding: 20rpx 0;
  }
  .btn-view {
    width: 100%;
    padding: 20rpx 0;
    /* background-color: yellow; */
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .aniu{
	  width: 90%;
  }
</style>