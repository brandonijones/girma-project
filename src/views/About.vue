<template>
  <div>
    <MDBRow center class="d-flex m-0">
      <MDBCol md="7">
        <h1 class="p-3">About the GIRMA</h1>
        <img class="img-fluid pb-3 mw-100" src="../assets/images/cello.jpg" alt="artist rendering of a cello">
        
        <div class="fs-5">
          <p>In the year 2000, Brawnson C. Johnson set out his quest to find the most compelling pieces of art. He searched far and wide to 
            find the art that would be initially turned away by the critics or even the common folk. Mr. Johnson believed that there should 
            be no restrictions to what can be considered art. In his eyes, almost all things are artistic to some extent, but when he had 
            the idea for the institute, he wanted to find the ones that were rare. </p>
          <p>Unfortunately, with this daunting task to find art that was so rare, Mr. Johnson was only able to find six pieces before he 
            tragically passed away. However, in his will he stated that this should not be the end of the quest to find more rare modern 
            art around the world. He wrote, “People will always be making beautiful pieces of art. That means people will also be rejecting 
            art which also means we should always be accepting art.” So to continue the legacy of Brawnson C. Johnson’s quest to find more 
            art, it is the reason why this website was created. </p>
          <p>
            In the years of 2021 and beyond begins the new era art. We carefully preserved the original pieces found by Mr. Johnson and 
            uploaded to this website for all to see. Here at the Global Institute of Rare Modern Art, we are always looking for content 
            to add to our special gallery. Also, to make the job easier, we ask you to send any original pieces you have made so that 
            we can review it and potentially add it to the gallery. The six original pieces are already a part of history and the vision 
            of art seen by B.C. Johsnon. Maybe your art can be too.
          </p>
        </div>
      </MDBCol>
    </MDBRow>
  </div>
</template>

<script>
import {
  MDBRow,
  MDBCol
} from 'mdb-vue-ui-kit';

export default {
  name: 'About',
  components: {
    MDBRow,
    MDBCol
  }
};
</script>
