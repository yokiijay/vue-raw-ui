---
## 等边大小
`size="200"`

```vue
<template>
  <Box row>
    <Box class="box-size" size="200" center>我是正方形Box</Box>
    <Box class="box-size" size="180px" center>我也是正方形Box</Box>
    <Box class="box-size" :size="150" center>我还是正方形Box</Box>
  </Box>
</template>

<script>
import './style/index.less'

export default {
  data() {
    return {}
  }
}
</script>

```
## 非等边大小
`:size="[width,height]"`

```vue
<template>
  <Box row>
    <Box class="box-size" :size="['300','200']" center>我是长方形Box</Box>
    <Box class="box-size" :size="['250px','100px']" center>我也是长方形Box</Box>
    <Box class="box-size" :size="[200,50]" center>我还是长方形Box</Box>
  </Box>
</template>

<script>
import './style/index.less'

export default {
  data() {
    return {}
  }
}
</script>
```

## 百分比大小
`:size="[width%,height%]"`

```vue
<template>
  <Box class="box-size" row :size="[800,400]">
    <Box class="box-size" size="50%" center>width:50%, height:50%</Box>
    <Box class="box-size" size="30%" center>width:30%, height:30%</Box>
    <Box class="box-size" size="20%" center>width:20%, height:20%</Box>
  </Box>
</template>

<script>
import './style/index.less'

export default {
  data() {
    return {}
  }
}
</script>
```
```vue
<template>
  <Box class="box-size" row :size="[800,400]">
    <Box class="box-size" :size="['50%','80%']" center>width:50%, height:80%</Box>
    <Box class="box-size" :size="['30%','60%']" center>width:30%, height:60%</Box>
    <Box class="box-size" :size="['20%', '30%']" center>width:20%, height:30%</Box>
  </Box>
</template>

<script>
import './style/index.less'

export default {
  data() {
    return {}
  }
}
</script>
```