---

```vue
<template>
  <Box class="header" center row alignX="space-between">
    <Box class="logo" size="30" center fit>
      <img src="https://cn.vuejs.org/images/logo.png" alt="" />
    </Box>

    <Box class="nav" row>
      <div v-for="(item,index) in navList" :key="item" :class="{'active': index==activeIndex}" @click="activeIndex=index">{{item}}</div>
    </Box>

    <Box class="search" size="20" center fit>
      <img src="https://i.loli.net/2020/05/21/xvCb8WL9rk7oVEq.png" alt="" />
    </Box>
  </Box>
</template>

<script>
import './style/index.less'

export default {
  data() {
    return {
      navList: [
        'Shots',
        'Members',
        'Teams'
      ],
      activeIndex: 0
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.logo {
  overflow: hidden;
}

.nav>div {
  margin: 0 15px;
  font-weight: 500;
  font-size: 15px;
  color: gray;
  cursor: pointer;
  padding: 10px 0;
}

.nav>div.active {
  color: black;
}

.search {
  overflow: hidden;
}

</style>
```