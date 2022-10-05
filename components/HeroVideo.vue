<template>
  <video-background
    :src="video"
    :poster="src"
    :autoplay="false"
    :loop="false"
    :muted="false"
    ref="videobackground"
    class="hero-video"
    @playing="playingVideo"
    @ended="endedVideo"
  >
    <div class="video-content" :class="[{ playing: playing }]">
      <div class="control" @click="play">
        <h3 v-if="title" class="text-4xl text-white font-semibold">
          {{ title }}
        </h3>
        <h4 v-if="subtitle" class="text-2xl text-white font-semibold">
          {{ subtitle }}
        </h4>
        <div class="content">
          <slot></slot>
        </div>
        <div
          class="border-icon"
          :class="[{ 'mt-12': subtitle !== '' || title !== '' }]"
        >
          <div class="icon-state"></div>
        </div>
      </div>
    </div>
  </video-background>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  name: 'HeroVideo',
  props: {
    title: {
      type: String,
      default: '',
    } as PropOptions<string>,
    subtitle: {
      type: String,
      default: '',
    } as PropOptions<string>,
    src: {
      type: String,
      default: '',
    } as PropOptions<string>,
    video: {
      type: String,
      default: '',
    } as PropOptions<string>,
  },
  data() {
    return {
      playing: false,
    }
  },
  methods: {
    playingVideo() {
      this.playing = true
    },
    endedVideo() {
      this.playing = false
      const video: any = this.$refs.videobackground
      if (video) {
        video.player.hide()
      }
    },
    play() {
      const video: any = this.$refs.videobackground
      if (this.playing && video) {
        this.playing = false
        video.player.hide()
        video.player.pause()
      } else {
        video.player.play()
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.hero-video {
  @apply bg-gray-300 bg-cover bg-center flex flex-col items-center justify-center;
}

.control {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 400ms all ease;
}

.video-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  &.playing {
    &:hover {
      .control {
        opacity: 1;
      }
    }

    .control {
      @include media-context(
        $tweak-media-expressions: (
          'hover': '(hover: hover)',
        )
      ) {
        @include media('hover') {
          opacity: 0;
        }
      }
    }

    .icon-state {
      border-style: double;
      border-width: 0px 0 0px 12px;
      transform: none;
    }

    .content {
      opacity: 0;
    }

    .border-icon {
      border: 3px solid transparent;
    }
  }

  .content {
    transition: 400ms all ease;
  }

  .border-icon {
    transition: 400ms all ease;
    width: 36px;
    height: 36px;
    border: 3px solid #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.icon-state {
  display: block;
  box-sizing: border-box;

  width: 0;
  height: 15px;

  cursor: pointer;

  border-color: transparent transparent transparent #fff;
  transition: 400ms all ease;
  will-change: border-width;
  transform: translateX(1px);

  border-style: solid;
  border-width: 7px 0 7px 12px;
}

video {
  width: 0;
}
</style>
