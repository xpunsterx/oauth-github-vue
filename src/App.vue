<template>
  <div id="app">
    <h1>asasdasd</h1>
    <keep-alive exclude="UserView">
      <router-view :key="$route.fullPath" />
    </keep-alive>
  </div>
</template>
