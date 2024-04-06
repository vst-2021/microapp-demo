<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const iframeRef = ref<HTMLIFrameElement>()

const callback = (evt: MessageEvent) => {
  try {
    const data = JSON.parse(evt.data)
    if (data && data.event == "init") {
      iframeRef.value?.contentWindow?.postMessage(
        JSON.stringify({
          action: "load",
          xml: "",
        }),
        '*'
      )
    }
  } catch (error) {

  }
}


onMounted(() => window.addEventListener('message', callback))
onBeforeUnmount(() => window.removeEventListener('message', callback))
</script>

<template>
  <iframe className="diagrams-iframe" ref="iframeRef"
    src="https://embed.diagrams.net/?embed=1&ui=atlas&spin=1&proto=json" />
</template>

<style scoped>
iframe {
    width: 100%;
    height: 100%;
    min-width: 400px;
    min-height: 400px;
    border: none;
}
</style>
