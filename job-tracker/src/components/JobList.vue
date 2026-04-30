<script setup lang="ts">
import dayjs from 'dayjs';
import { onMounted, ref } from 'vue';
import { getJobs, jobs } from '@/models/jobs';
onMounted(() => {
    getJobs();
})
</script>
<template>
    <h1>Job Tracker</h1>
    
    <thead>
        <tr>
            <th scope="col">Position</th>
            <th scope="col">Company</th>
            <th scope="col">Application Status</th>
            <th scope="col">Date Applied</th>
            <th scope="col">Date Updated</th>
            <th scope="col">Location</th>
            <th scope="col">Company Location</th>
            <th scope="col">Post Link</th>
            <th scope="col">Notes</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="job in jobs" :key="job.id">
            <td>{{ job.position }}</td>
            <td>{{ job.company }}</td>
            <td>{{ job.application_status }}</td>
            <td>{{ dayjs(job.date_applied ).format('MM-DD-YYYY hh:mmA') }}</td>
            <td>{{ dayjs(job.updated_at ).format('MM-DD-YYYY hh:mmA')  }}</td>
            <td>{{ job.job_location }}</td>
            <td>{{ job.company_location }}</td>
            <td>{{ job.post_link }}</td>
            <td>{{ job.notes }}</td>
        </tr>
    </tbody>
</template>
<style scoped>
th{
    padding: 5px;
}
td{
    padding: 5px;
}
</style>