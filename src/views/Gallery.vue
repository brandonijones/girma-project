<template>
    <div class="p-3 text-center">
        <h1 class="display-3">Gallery</h1>
    </div>
    <h2 class="text-center mb-4 py-2 text-muted border-top border-bottom">Pictures</h2>
    <ArtImages/>
    <h2 class="text-center mb-4 py-2 text-muted border-top border-bottom">Videos & Music</h2>
    <ArtVideos/>
    <div class="mb-5"></div>
      
</template>

<script>
    import ArtImages from '../components/ArtImages';
    import ArtVideos from '../components/ArtVideos';

    export default {
        name: 'Gallery',
        components: {
            ArtImages,
            ArtVideos
        }
    }
</script>

<style>

</style>