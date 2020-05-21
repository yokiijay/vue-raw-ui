---
## 居中
`center`

```vue
<template>
  <Box class="box-basic" :size="[null, 300]" center>
    <div class="ball">1</div>
    <div class="ball">2</div>
    <div class="ball">3</div>
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

## 居中横排 row
`center row`

```vue
<template>
  <Box class="box-basic" :size="[null, 300]" center row>
    <div class="ball">1</div>
    <div class="ball">2</div>
    <div class="ball">3</div>
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

## 反序 reverse
`center row reverse`

```vue
<template>
  <Box class="box-basic" :size="[null, 300]" center row reverse>
    <div class="ball">1</div>
    <div class="ball">2</div>
    <div class="ball">3</div>
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

## 自定义布局 alignX alignY
`row alignX alignY`

```vue
<template>
  <Box class="box-basic" :size="[null, 300]" row alignX="space-between" alignY="flex-end">
    <div class="ball">1</div>
    <div class="ball">2</div>
    <div class="ball">3</div>
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