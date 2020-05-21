<template>
  <div
    class="box"
    :class="{
      'box-avatar': avatar,
      'box-fit': fit,
      'box-fit--contain': fit === 'contain'
    }"
    :style="{
      margin: selfCenter ? '0 auto' : '',
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      width,
      height,
      minWidth: width ? width : '',
      minHeight: height ? height : '',
      flex: flex ? parseFloat(flex) : ''
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Box',
  props: {
    /**
     * 居左对齐
     */
    left: Boolean,
    /**
     * 居右对齐
     */
    right: Boolean,
    /**
     * 居上对其
     */
    top: Boolean,
    /**
     * 居下对齐
     */
    bottom: Boolean,
    /**
     * 居中对齐
     */
    center: Boolean,
    /**
     * 空间不够时，允许换行
     */
    wrap: Boolean,
    /**
     * 设为横排
     */
    row: Boolean,
    /**
     * 设为反序
     */
    reverse: Boolean,
    /**
     * 自定义X轴的对齐方式如: 'flex-end' 'space-between'
     */
    alignX: {
      type: String,
      default: ''
    },
    /**
     * 自定义Y轴的对齐方式如: 'flex-end' 'space-between'
     */
    alignY: {
      type: String,
      default: ''
    },
    /**
     * 定义容器的宽高
     */
    size: {
      type: [String, Number, Array],
      default: ''
    },
    /**
     * 容器自身居中(需要设置size)
     */
    selfCenter: Boolean,
    /**
     * 容器自身的flex空间
     */
    flex: {
      type: [String, Number],
      default: ''
    },
    /**
     * 设为头像容器，推荐使用Avatar组件
     */
    avatar: Boolean,
    /**
     * 让被包裹的img图片充满容器显示
     */
    fit: Boolean
  },
  computed: {
    flexDirection() {
      if (this.reverse) return this.row ? 'row-reverse' : 'column-reverse'
      return this.row ? 'row' : 'column'
    },
    flexWrap() {
      return this.wrap ? 'wrap' : 'nowrap'
    },
    justifyContent() {
      let justifyContent = 'flex-start'

      if (this.row) {
        //横着
        if (this.center) justifyContent = 'center'
        if (this.left) justifyContent = 'flex-start'
        if (this.right) justifyContent = 'flex-end'
        if (this.alignX) justifyContent = this.alignX
      } else {
        //竖着
        if (this.center) justifyContent = 'center'
        if (this.top) justifyContent = 'flex-start'
        if (this.bottom) justifyContent = 'flex-end'
        if (this.alignY) justifyContent = this.alignY
      }

      return justifyContent
    },
    alignItems() {
      let alignItems = 'flex-start'

      if (!this.row) {
        //竖着
        if (this.center) alignItems = 'center'
        if (this.left) alignItems = 'flex-start'
        if (this.right) alignItems = 'flex-end'
        if (this.alignX) alignItems = this.alignX
      } else {
        //横着
        if (this.center) alignItems = 'center'
        if (this.top) alignItems = 'flex-start'
        if (this.bottom) alignItems = 'flex-end'
        if (this.alignY) alignItems = this.alignY
      }

      return alignItems
    },
    width() {
      if (!this.size) return
      switch (this.size.constructor.name) {
        case 'String': {
          const percent = this.size.match(/^(\d+)%$/)
          if (percent) return this.size
          return this.size.match(/^\d+$/)
            ? this.size * 1 + 'px'
            : parseFloat(this.size) + 'px'
        }
        case 'Number':
          return this.size + 'px'
        case 'Array':
          if (!this.size[0]) return 'auto'
          if (
            this.size[0].constructor.name === 'String' &&
            this.size[0].match(/^(\d+)%$/)
          )
            return this.size[0]
          return this.size[0].toString().match(/^\d+$/)
            ? this.size[0] * 1 + 'px'
            : parseFloat(this.size[0]) + 'px'
        default:
          return false
      }
    },
    height() {
      if (!this.size) return
      switch (this.size.constructor.name) {
        case 'String': {
          const percent = this.size.match(/^(\d+)%$/)
          if (percent) return this.size
          return this.size.match(/^\d+$/)
            ? this.size * 1 + 'px'
            : parseFloat(this.size) + 'px'
        }
        case 'Number':
          return this.size + 'px'
        case 'Array':
          if (!this.size[1]) return 'auto'
          if (
            this.size[1].constructor.name === 'String' &&
            this.size[1].match(/^(\d+)%$/)
          )
            return this.size[1]
          return this.size[1].toString().match(/^\d+$/)
            ? this.size[1] * 1 + 'px'
            : parseFloat(this.size[1]) + 'px'
        default:
          return false
      }
    },
    objectFit() {
      switch (this.fit.constructor.name) {
        case 'String':
          return this.fit
        case 'Boolean':
          return 'cover'
      }
      return ''
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  display: flex;
}

.box-avatar {
  overflow: hidden;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.box-fit {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &--contain {
    object-fit: contain;
  }
}
</style>
