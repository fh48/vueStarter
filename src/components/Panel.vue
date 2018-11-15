<template>
  <div class="panel">
    <div class='header'>
    <h3 class="headline">{{headline}}</h3>
    <h2 class="sub-headline">{{subHeadline}}</h2>
    </div>
      <div class='body'>
            <slot name="body"></slot>

      </div>
  </div>
</template>



<script>
export default {
  name: "Panel",
  props: {
    headline: String,
    subHeadline: String
  }
};
</script>


<style lang="scss" scoped>
.panel {
  background: #fff;
  border-radius: 2px;
  width: 50%;
  box-shadow: 0px 22px 24px 0px rgba(46, 51, 51, 0.07);
}

.header {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  color: #fff;
  background: $brandColor;
  padding: 15px;
  border-radius: 2px 2px 0 0;
}

.body {
  padding: 20px;
}

.sub-headline {
  font-size: 15px;
  font-weight: thin;
  margin-bottom: 0px;
}

.headline {
  margin-bottom: 0px;
}
</style>
