<template>
    <MDBFooter :text="['center', 'lg-start']">
        <MDBContainer class="p-4">
            <MDBRow class="fs-8 text-center">
                <MDBCol>
                    <router-link to='/' class="text-dark">Home</router-link>
                </MDBCol>
                <MDBCol>
                    <router-link to='/gallery' class="text-dark">Gallery</router-link>
                </MDBCol>
                <MDBCol>
                    <router-link to='/about' class="text-dark">About</router-link>
                </MDBCol>
                <MDBCol>
                    <router-link to='/contact' class="text-dark">Contact</router-link>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            2021 Copyright [unofficial]: Global Institute of Rare Modern Art & Brandon Jones
        </div>
    </MDBFooter>
</template>

<script>
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-vue-ui-kit';

export default {
    components: {
        MDBFooter,
        MDBContainer,
        MDBRow,
        MDBCol
    },
};
</script>

<style>
.logo {
    width: 2rem;

}
</style>