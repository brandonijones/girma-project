<template>
    <MDBContainer class="text-center" fluid>
        <MDBRow class="row">
            <MDBCol lg="4" class="d-flex justify-content-center align-items-center" v-bind:key="artVideo.id" v-for="artVideo in artVideos">
                <MDBCard class="mb-3 cursor strong-2-shadow" aria-controls="artVideoModal" @click="artVideoModal = true; setId(artVideo.id);">
                    <iframe 
                        top
                        class="img-fluid "
                        width="448"
                        v-bind:src="artVideo.source" 
                        title="YouTube video player" 
                        allowfullscreen></iframe>
                    <MDBCardBody>
                        <MDBCardTitle>{{artVideo.name}}</MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>  
    </MDBContainer>
    
    <MDBModal
        size="xl"
        id="artVideoModal"
        tabindex="-1"
        labelledby="artVideoLabel"
        v-model="artVideoModal"
        centered
    >
        <MDBModalHeader>
            <MDBModalTitle></MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>
            <MDBContainer fluid>
                <MDBRow class="row my-1">
                    <MDBCol lg="6" class="d-flex justify-content-center align-items-center">
                        <iframe
                            width="448" height="252" 
                            v-bind:src="getVidIndex(artVideos, index = currentItem - 1).source" 
                            v-bind:id="getVidIndex(artVideos, index = currentItem - 1).detail" 
                            title="YouTube video player" 
                            allowfullscreen></iframe>
                    </MDBCol>
                    <MDBCol lg="6" class="my-3">
                        <h3>{{getVidIndex(artVideos, index = currentItem - 1).name}}</h3>
                        <p>{{getVidIndex(artVideos, index = currentItem - 1).description}}</p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBModalBody>
    </MDBModal>
</template>

<script>
import {
    MDBCard,
    MDBCardImg,
    MDBCardBody,
    MDBCardTitle,
    MDBCardGroup,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-vue-ui-kit";

import {ref} from 'vue';

export default {
    name: 'ArtVideos',
    components: {
        MDBCard,
        MDBCardImg,
        MDBCardBody,
        MDBCardTitle,
        MDBCardGroup,
        MDBContainer,
        MDBRow,
        MDBCol,
        MDBModal,
        MDBModalBody,
        MDBModalHeader,
        MDBModalTitle
    },
    setup() {
        const artVideoModal = ref(false);
        return {
            artVideoModal
        };
    },
    data() {
        return {
            currentItem: 0,
            artVideos: [
                {
                    id: 1,
                    name: "Grass",
                    gallery: "grass-g",
                    detail: "grass-d",
                    source: "https://www.youtube.com/embed/er_x2ulSZYc",
                    description: "Two whole minutes of just pure nature. Two whole minutes of beautiful grass. Look at how green the grass is. It's amazingly green. It caught my attention once I saw it. I just had to stop what I was doing, grab my phone, sit down in a random spot, and record it for two whole minutes. I am a strong believer that grass grows naturally from the ground as a seed. It goes through so much hardship and dirt to get to the way it is. That is why I filmed two minutes of this grass outside my house. Grass is just such an amazing plant and very important to the planet by making it green. Without grass, it would just be dirt and rocks on this planet. This world just wouldn't make sense without having grass a part of it all. So be thankful for the green scenary out there and admire it for two minutes just like I did. Don't rip it, don't leave trash on it, don't spit on it, don't sit on it, don't step on it, and don't record it. Just let it be you and the grass..."
                },
                {
                    id: 2,
                    name: "Song of the Broken Cello",
                    gallery: "cello-g",
                    detail: "cello-d",
                    source: "https://www.youtube.com/embed/_OigJAK9084",
                    description: "An original piece played by Bruno C. Johns that shows struggle, pain, and persevernce. Despite the challenges and shortcomings the musician faced while using a cello with a frayed bow and missing parts, he still pressed on to finish the song. "
                },
                {
                    id: 3,
                    name: "Music Ahead of Its Time",
                    gallery: "cacophony-g",
                    detail: "cacophony-d",
                    source: "https://www.youtube.com/embed/tzlt-D9b9no",
                    description: "Uncovered in the year 2016. The artist is unknown, but the message is clear. Many listeners may look at this as some sort of nonsense or cacophony of sounds and they are very wrong. This song tells the story of life unlike any other song before. The beginning represents the simplicities of childhood and how it quickly turns into chaos. The artist cleaverly uses a variety of instruments and musical sounds to help immerse the user in this experience. Whoever made this was clearly born in the wrong generation."
                },
            ]
        }
    },
    methods: {
        setId(selectedItem) {
            this.currentItem = selectedItem;
        },
        getVidIndex(artVideos = [], index = 0) {
            return artVideos[index];
        }
    }
}
</script>

<style>
.cursor {
    cursor: pointer;
}

.cursor:hover {
    color: #a3a3a3;
}
/* 
#grass-g { width: 30rem; }
#cello-g { width: 20rem; }
#cacophony-g { width: 25rem; }

#grass-d { width: 30rem; }
#cello-d { width: 25rem; }
#cacophony-d { width: 30rem; } */
</style>
