<script setup lang="ts">
import { ref } from 'vue';
    interface Job {
        id: string;
        position: string;
        company: string;
        status: string;
        date_applied: string;
        location: string;
        company_location: string;
        post_link: string;
        notes: string;
    }
    const jobs = ref<Job[]>([])

    fetch("http://localhost:3000/jobs/").then(response=>response.json()).then(jsonData=>{
        jobs.value = jsonData;
    }).catch(err=> {
      console.log(err)
    })
</script>
<template>
    <div>
        <ul>
            <li v-for="job in jobs" :key="job.id">
                <p>Position: {{ job.position }}</p>
                <p>Company: {{ job.company }}</p>
            </li>
        </ul>
    </div>
</template>
<style scoped>
</style>