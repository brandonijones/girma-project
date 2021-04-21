<template>
    <MDBContainer class="text-center" fluid>
        <MDBRow class="row">
            <MDBCol lg="4" class="d-flex justify-content-center align-items-center" v-bind:key="artImg.id" v-for="artImg in artImgs">
                <MDBCard class="mb-3 cursor strong-2-shadow" aria-controls="artImageModal" @click="artImageModal = true; setId(artImg.id);">
                    <MDBCardImg top v-bind:src="artImg.source" alt="..." v-bind:id="artImg.gallery"/>
                    <MDBCardBody>
                        <MDBCardTitle>{{artImg.name}}</MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    </MDBContainer>

    <MDBModal
        size="xl"
        id="artImageModal"
        tabindex="-1"
        labelledby="artImageLabel"
        v-model="artImageModal"
        centered
    >
        <MDBModalHeader>
            <MDBModalTitle></MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>
            <MDBContainer fluid>
                <MDBRow class="row my-1">
                    <MDBCol lg="6" class="d-flex justify-content-center align-items-center">
                        <img class="img-fluid" v-bind:src="getImgIndex(artImgs, index = currentItem - 1).source" alt="..." v-bind:id="getImgIndex(artImgs, index = currentItem - 1).detail">
                    </MDBCol>
                    <MDBCol lg="6" class="my-3">
                        <h3>{{getImgIndex(artImgs, index = currentItem - 1).name}}</h3>
                        <p>{{getImgIndex(artImgs, index = currentItem - 1).description}}</p>

                        <!-- conditional rendering for if giraffe image is selected -->
                        <div v-if="getImgIndex(artImgs, index = currentItem - 1).id == 2">
                            <p v-bind:key="variant.id"  v-for="variant in artImgs[1].variants" @click="updateImage(variant.source)" class="cursor">{{variant.text}}</p>
                        </div>               
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBModalBody>
    </MDBModal>
    <div class="mb-5"></div>
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
    name: 'ArtImages',
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
        const artImageModal = ref(false);
        return {
            artImageModal
        };
    },
    data() {
        return {
            currentItem: 0,
            artImgs: [
                {
                    id: 1,
                    name: "New Age Penguin",
                    gallery: "penguin-g",
                    detail: "penguin-d",
                    source: require('@/assets/images/penguin.png'),
                    description: "There isn't much to say about this penguin except that it's truly one of a kind."
                },
                {
                    id: 2,
                    name: "Giraffe",
                    gallery: "giraffe-g",
                    detail: "giraffe-d",
                    source: require('@/assets/images/giraffe-bw.png'),
                    description: "This is the only photo of the last giraffe with a short neck. It's very unfortunate that these giraffes are are so rare. Maybe one day we will be able to see one of these again.",
                    variants: [
                        {
                            id: 0,
                            text: "See colorized photo",
                            source: require('@/assets/images/giraffe.png'),
                        },
                        {
                            id: 1,
                            text: "See original photo",
                            source: require('@/assets/images/giraffe-bw.png'),
                        }
                    ]
                },
                {
                    id: 3,
                    name: "Ms. Dik Dik",
                    gallery: "dikdik-g",
                    detail: "dikdik-d",
                    source: require('@/assets/images/dikdik.png'),
                    description: "Ever see a dik dik in a business suit with a red fedora and self-applied lipstick in the middle of the African savannah? Well now you have, and her name is Ms. Dik Dik. She is the only one of her kind to evolve on the level of humans. Through shear will, determination, and observation, she got to standing on her hind legs and put on a suit. Ms. Dik Dik hopes to find a job in America where she can be an accountant."
                },
            ]
        }
    },
    methods: {
        setId(selectedItem) {
            this.currentItem = selectedItem;
        },
        getImgIndex(artImgs = [], index = 0) {
            return artImgs[index];
        },
        updateImage(variantImage) {
            this.artImgs[1].source = variantImage
        }
    }
}
</script>

<style>
.cursor { cursor: pointer; }

.cursor:hover {
    color: #d3d3d3;
}
/* 
#penguin-g { width: 25rem; }
#giraffe-g { width: 20rem; }
#dikdik-g { width: 23rem; }

#penguin-d { width: 30rem; }
#giraffe-d { width: 25rem; }
#dikdik-d { width: 28rem; } */
</style>