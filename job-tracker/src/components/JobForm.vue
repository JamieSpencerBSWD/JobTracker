<script lang="ts">

</script>
<template>
    <form action="" method="get" >
        <div class="jobForm">
            <label for="position">Position</label>
            <input type="text" placeholder="Software Engineer..."/>
            <label for="company">Company</label>
            <input type="text" placeholder="Google..."/>
            <label for="status">Application Status</label>
            <select name="status" id="application status">
                <option value="applied">Applied</option>
                <option value="reached out">Reached Out</option>
                <option value="interview scheduled">Interview Scheduled</option>
                <option value="offer">Offer</option>
                <option value="denied - closed door">Denied (Closed Door)</option>
                <option value="denied - open door">Denied (Open Door)</option>
            </select>
            <label for="company location">Company location</label>
            <input type="text" placeholder="Salt Lake City, UT..."/>
            <label for="location">Work location</label>
            <select name="location" id="work location">
                <option value="remote">Remote</option>
                <option value="in person">In Person</option>
                <option value="hybrid">Hybrid</option>
            </select>
            <label for="post link">Post Link</label>
            <input type="text" placeholder="linkedin.com/jobs/view/1234..."/>
            <label for="notes">Application Notes</label>
            <input type="text" placeholder="Follow up with..."/>
        </div>
    </form>
</template>
<style scoped>

</style>