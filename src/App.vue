<template>
  <div id="app">
    <keep-alive exclude="UserView">
      <router-view :key="$route.fullPath" />
    </keep-alive>
  </div>
</template>
