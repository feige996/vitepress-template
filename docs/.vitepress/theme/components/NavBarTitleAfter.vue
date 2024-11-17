<script setup lang="ts">
/**
 * NavBarTitleAfter 组件用于显示当前项目的版本号。
 * 版本号从 package.json 文件中读取，并以绿色小字体显示。
 */
import packageConfig from '../../../../package.json'
</script>

<template>
  <span
    style="
      color: green;
      font-size: 10px;
      margin-left: 4px;
      background-color: azure;
      padding: 0 4px;
      border-radius: 4px;
      display: inline-block;
      font-weight: 700;
    "
    >{{ packageConfig.version }}</span
  >
</template>
