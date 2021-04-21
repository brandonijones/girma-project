<template>
    <MDBRow center class="d-flex m-4">
        <MDBCol md="8">
            <h2>How to Reach Us</h2>
            <p>Email: thegirma2021@gmail.com</p>
            <p>Phone: Sorry, we have no phone number...</p>
            <p>Feel free to contact us about any questions, concerns, or suggestions you have about our institute. 
                We will try to respond as soon as we can!
            </p>
            <h2>Send Us Your Art</h2>
            <p>Here at the G.I.R.M.A, we are always looking for rare creative art pieces to display on our website. 
                If you have some of your own original work you would like to have displayed, send it our way! Our 
                team will review it to see if it meets our particular criteria. Once it has been reviewed, we will 
                reply with our decision. If your art has been accepted, we will confirm with you to make sure you 
                still want it displayed. An accepted and confirmed piece of art will be given credit to the original 
                artist.</p>
            <div class="border border-1 p-3">
                <h4>Art Submission Form</h4>
                <MDBRow tag="form" action="https://formsubmit.co/thegirma2021@gmail.com" method="POST" class="g-3 needs-validation" enctype="multipart/form-data">
                    <MDBCol col="12">
                        <MDBInput
                        v-model="input1"
                        type="text"
                        name="name"
                        aria-label="Name"
                        label="Preferred Name"
                        invalidFeedback="Please provide your preferred name. If you wish to be unknown, write 'Anonymous.'"
                        validFeedback="Looks good!"
                        required
                        class="form-control"
                        />
                    </MDBCol>
                    
                    <MDBCol col="12">
                        <MDBInput
                        v-model="input2"
                        type="email"
                        name="email"
                        label="Email Address"
                        invalidFeedback="Please provide your email address. This is how we can contact you."
                        validFeedback="Looks good!"
                        required
                        class="form-control"
                        />
                    </MDBCol>
                    <MDBCol col="12">
                        <MDBInput 
                        v-model="input3"
                        multiple
                        type="file"
                        name="attachment"
                        accept="audio/*, video/*, image/*"
                        id="inputGroupFile01"
                        invalidFeedback="Please choose an artpiece to upload"
                        validFeedback="Looks good!"
                        required
                        class="form-control"
                        />
                    </MDBCol>
                    
                    <MDBCol col="12">
                        <MDBTextarea
                        rows="5"
                        v-model="textarea"
                        type="text"
                        name="message"
                        label="Tell us everything about your art!"
                        invalidFeedback="Please provide some information about your art"
                        validFeedback="Looks good!"
                        required
                        class="form-control"
                        />
                    </MDBCol>
                    <MDBCol col="12">
                        <MDBBtn color="dark" type="submit">Submit Form</MDBBtn>
                    </MDBCol> 
                </MDBRow>
            </div>
        </MDBCol> 
    </MDBRow>
</template>

<script>
import {
    MDBInput,
    MDBTextarea,
    MDBRow,
    MDBCol,
    MDBFile,
    MDBBtn
} from 'mdb-vue-ui-kit';

import {ref} from 'vue';

export default {
    name: 'Contact',
    components: {
        MDBInput,
        MDBTextarea,
        MDBRow,
        MDBCol,
        MDBFile,
        MDBBtn
    },
    setup() {
        const checkForm = e => {
            e.target.classList.add("was-validated");
        }
        const input1 = ref('');
        const input2 = ref('');
        const input3 = ref('');
        const textarea = ref('');

        return {
            input1,
            input2,
            input3,
            textarea,
            checkForm
        };
    },
};

</script>