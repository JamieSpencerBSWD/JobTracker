import { ref } from "vue";

export type Job = {
    id: string;
    position: string;
    company: string;
    application_status: string;
    date_applied: string;
    updated_at: string;
    job_location: string;
    company_location: string;
    post_link: string;
    notes: string;
}
export const jobs = ref<Job[]>([])
export const getJobs = async() => {
    try {
        await fetch("http://localhost:3000/jobs/").then(response=>response.json()).then(jsonData=>{
        jobs.value = jsonData;
    }).catch(err=> {
    console.log(err)
    })
    } catch (error) {
        console.log(error)
    }
}