<template>
    <MDBNavbar expand="lg" light bg="light" container>
        <MDBNavbarBrand>
            <router-link to="/" class="mx-3 my-2">
                <img src="../assets/girma_logo.png" alt="logo" height="70">
            </router-link>
        </MDBNavbarBrand>
        <MDBNavbarToggler
            @click="collapse1 = !collapse1"
            target="#navbarSupportedContent"
            class="fs-1"
        ></MDBNavbarToggler>
        <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
            <MDBNavbarNav class="mx-3 mb-3 mb-lg-0 fs-3">
                <MDBNavbarItem active>
                    <router-link to="/gallery" class="text-dark me-5">Gallery</router-link>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <router-link to="/about" class="text-dark me-5">About</router-link>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <router-link to="/contact" class="text-dark me-5">Contact</router-link>
                </MDBNavbarItem>
            </MDBNavbarNav>
        </MDBCollapse>
    </MDBNavbar>
</template>

<script>
import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
} from 'mdb-vue-ui-kit';

import { ref } from 'vue';

export default {
    name: 'Navbar',
    components: {
        MDBNavbar,
        MDBNavbarToggler,
        MDBNavbarBrand,
        MDBNavbarNav,
        MDBNavbarItem,
        MDBCollapse 
    },
    setup() {
        const collapse1 = ref(false);
        
        return {
            collapse1
        }
    }
};
</script>

<style>

</style>