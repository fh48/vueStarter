<template>
  <Panel
    headline="Palette"
    sub-headline="Choose the colors for your new project"
  >
    <template slot="body">
      <div class="palette">
        <div>
          <span>light Shades</span>
          <div class="color-tile lightShades"></div>
        </div>
        <div>
          <span>light Accent</span>
          <div class="color-tile lightAccent"></div>
        </div>
        <div>
          <span>Brand Color</span>
          <div class="color-tile brandColor"></div>
        </div>
        <div>
          <span>Dark Accent</span>
          <div class="color-tile darkAccent"></div>
        </div>
        <div>
          <span>Dark Shades</span>
          <div class="color-tile darkShades"></div>
        </div>
      </div>
    </template>
  </Panel>
</template>

<script>
import Panel from "./components/Panel.vue";
export default {
  name: "Home",
  components: {
    Panel
  }
};
</script>

<style lang="scss" scope>
.palette {
  display: flex;
  justify-content: center;
  flex-direction: row;

  & > div {
    padding: 25px;
  }
}

.lightShades {
  background: $lightShades;
}
.lightAccent {
  background: $lightAccent;
}
.brandColor {
  background: $brandColor;
}
.darkAccent {
  background: $darkAccent;
}
.darkShades {
  background: $darkShades;
}

.color-tile {
  width: 50px;
  height: 50px;
  border: 1px solid black;
}
</style>
