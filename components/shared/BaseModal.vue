<script setup lang="ts">
    import { VueFinalModal } from 'vue-final-modal'
    import { Form, Field, configure } from 'vee-validate';
    import { object, string } from 'yup';

    const regex = /^(1[ -]?)?\d{3}[ -]?\d{3}[ -]?\d{4}$/;
    const isEmailSent = ref(false)
    const isLoading = ref(false)

    configure({
        validateOnBlur: false,
        validateOnChange: true,
        validateOnInput: true,
        validateOnModelUpdate: true,
    });

    let userSchema = object({
        name: string().required(),
        phone: string().required().matches(regex, 'number is not valid'),
        email: string().required().email(),
        message: string().min(1).required(),
    });

    defineProps<{ title?: string }>()

    const emit = defineEmits<{ (e: 'confirm'): void }>()

    const submitForm = async (values: any) => {
        isLoading.value = true
        const baseUrl = useBaseUrl()
        
        try {
            const result = await $fetch(`${baseUrl}/api/mail`, {
                method: "POST",
                body: values, // No need to wrap in an extra object
                headers: { "Content-Type": "application/json" },
            });

            if (result && result.success) {
                isEmailSent.value = true
                isLoading.value = false
            } else {
                throw new Error("Invalid response format");
            }
        } catch (error) {
            console.error("Failed to send email", error);
        }
    }
</script>

<template>
    <VueFinalModal
        class="flex justify-center items-center transform]"
        content-class="flex flex-col w-full h-full bg-faint"
    >  
        <div class="flex flex-col w-full h-full md:max-w-[600px] mx-auto justify-center items-center text-center">
            <div class="min-h-screen w-full md:max-w-[600px] bg-gray-100 px-6 py-6 flex flex-col justify-center sm:py-12">
                <div class="relative py-3">
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <button class="absolute right-6 top-6" @click="emit('confirm')">
                            <Icon name="uil:times" class="text-contrast text-2xl mr-3" />
                        </button>
                        <div v-if="!isEmailSent" class="max-w-md mx-auto">
                            <div>
                                <h2 class="h2">Let's talk!</h2>
                            </div>
                            <Form
                                v-slot="{ handleSubmit }"
                
                                :validation-schema="userSchema">
                                <div class="divide-y divide-gray-200">
                                    <div class="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div class="flex flex-col relative items-start">
                                            <Field autocomplete="off" id="name" name="name" type="text" class="p peer placeholder-transparent h-10 w-full border-b border-contrast text-contrast focus:outline-none py-2" placeholder="Name" />
                                            <label for="name" class="h4 absolute left-0 -top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                                            <ErrorMessage name="name" as="div" v-slot="{ message }">
                                                <p class="p text-xs text-orange absolute right-0 my-auto text-orange">{{ message }}</p>
                                            </ErrorMessage>
                                        </div>
                                        <div class="relative">
                                            <Field autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b border-contrast text-contrast focus:outline-none py-2" placeholder="Email" />
                                            <label for="email" class="h4 absolute left-0 -top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
                                            <ErrorMessage name="email" as="div" v-slot="{ message }">
                                                <p class="p text-xs text-orange absolute right-0 my-auto text-orange">{{ message }}</p>
                                            </ErrorMessage>
                                        </div>
                                        <div class="relative">
                                            <Field autocomplete="off" id="phone" name="phone" type="text" class="peer placeholder-transparent h-10 w-full border-b border-contrast text-contrast focus:outline-none py-2" placeholder="Phone" />
                                            <label for="phone" class="h4 absolute left-0 -top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Phone</label>
                                            <ErrorMessage name="phone" as="div" v-slot="{ message }">
                                                <p class="p text-xs text-orange absolute right-0 my-auto text-orange">{{ message }}</p>
                                            </ErrorMessage>
                                        </div>
                                        <div class="relative">
                                            <Field as="textarea" resize-y rows="6" autocomplete="off" id="message" name="message" type="text" class="min-h-16 peer placeholder-transparent w-full border-b border-contrast text-contrast focus:outline-none py-2" placeholder="Message" />
                                            <label for="email" class="h4 absolute left-0 -top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Message</label>
                                            <ErrorMessage name="message" as="div" v-slot="{ message }">
                                                <p class="p text-xs text-orange absolute right-0 my-auto text-orange">{{ message }}</p>
                                            </ErrorMessage>
                                        </div>
                                        <div class="relative !mt-8">
                                            <button @click.prevent="handleSubmit(submitForm)" class="btn-primary-white-full">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        <div v-else class="min-h-[518.5px]">

                            <svg class="absolute top-0 bottom-0 left-0 right-0 m-auto w-[148px]" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 72 72" style="enable-background:new 0 0 72 72;" xml:space="preserve">

                            <g>

                                <clipPath id="SVGID_2_">
                                    <use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
                                </clipPath>
                                <path class="bg-logo" d="M35.9,28v-7.5c0-0.6-0.3-1.1-0.8-1.3l-12.7-7.4c-0.5-0.3-1.1-0.3-1.6,0L8.2,19.2c-0.5,0.3-0.8,0.8-0.8,1.3
                                    v14.8c0,0.6,0.3,1.1,0.8,1.3L21,44c0.5,0.3,1.1,0.3,1.5,0l27-15.7c0.5-0.3,1.1-0.3,1.6,0l12.6,7.4c0.5,0.3,0.8,0.8,0.8,1.3v14.5
                                    c0,0.5-0.3,1.1-0.8,1.3L51,60.3c-0.5,0.3-1.1,0.3-1.6,0l-12.8-7.4c-0.5-0.3-0.8-0.8-0.8-1.3v-7.4"/>
                                <path class="logo" d="M35.9,28v-7.5c0-0.6-0.3-1.1-0.8-1.3l-12.7-7.4c-0.5-0.3-1.1-0.3-1.6,0L8.2,19.2c-0.5,0.3-0.8,0.8-0.8,1.3
                                    v14.8c0,0.6,0.3,1.1,0.8,1.3L21,44c0.5,0.3,1.1,0.3,1.5,0l27-15.7c0.5-0.3,1.1-0.3,1.6,0l12.6,7.4c0.5,0.3,0.8,0.8,0.8,1.3v14.5
                                    c0,0.5-0.3,1.1-0.8,1.3L51,60.3c-0.5,0.3-1.1,0.3-1.6,0l-12.8-7.4c-0.5-0.3-0.8-0.8-0.8-1.3v-7.4"/>
                            </g>
                            
                            <g>
                                <circle class="circle-stroke" cx="36" cy="36" r="32"/>
                            <circle class="circle-fill" cx="36" cy="36" r="32"/>
                            </g>
                            
                            <path class="tick" d="M24,38.4l4.5,4.5c1.3,1.3,3.4,1.3,4.7,0L48,28.1"/> 

                            </svg>
                        </div>
	
                        <div v-if="isLoading" class="loader absolute top-0 left-0 h-full w-full">
                            <div class="flex justify-center items-center h-full w-full rounded-[40px] bg-white/50">
                                <span class="block absolute w-[80px] h-[80px]">
                                    <span id="outerCircle1" class="block absolute m-auto w-[80px] h-[80px] rounded-[80px]"></span>
                                    <span id="innerCircle" class="block absolute shadow-none mt-[20px] mr-0 mb-0 ml-[20px] w-[40px] h-[40px] rounded-[40px]"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </VueFinalModal>
</template>

<style scoped>
    .bg-logo{clip-path:url(#SVGID_2_);fill:none;stroke:#F1F1F1;stroke-width:8;stroke-linejoin:round;stroke-miterlimit:10;}
    .logo{clip-path:url(#SVGID_2_);fill:none;stroke:#8247E5;stroke-width:8;stroke-linejoin:round;stroke-miterlimit:10;}
    .circle-fill{fill:#7B7365;}
    .circle-stroke{fill:none;stroke:#7B7365;stroke-width:5;stroke-miterlimit:10;}
    .tick{fill:none;stroke:#FFFFFF;stroke-width:5;stroke-linecap:round;stroke-miterlimit:10;}


    .bg-logo {
    opacity:1;
    animation: 1s bg-animation forwards;
    animation-delay: 0.5s;
    }

    @keyframes bg-animation {
    0%{
        opacity:1;
    }
    100%{
        opacity:0;
    }
    }

    .logo {
    opacity:1;
    stroke-dasharray: 180;
    stroke-dashoffset: 180;
    animation: 1s logo-animation forwards;
    }

    @keyframes logo-animation {
    0%{
        opacity:1;
        stroke-dashoffset: 180;
    }
    100%{
        opacity:0;
        stroke-dashoffset: 0;
    }
    }

    .circle-stroke {
    opacity:0;
    stroke-dasharray: 210;
    stroke-dashoffset: 0;
    animation: 1.5s stroke-animation forwards;
    animation-delay: 0.8s;
    }

    @keyframes stroke-animation {
    0%{
        opacity:0;
        stroke-dashoffset: 210;
    }
    100%{
        opacity:1;
        stroke-dashoffset: 0;
    }
    }

    .circle-fill {
    opacity:0;
    animation: 3s fill-animation forwards;
    animation-delay: 1s;
    }

    @keyframes fill-animation {
    0%{
        opacity:0;
    }
    80%{
        opacity:1;
    }
    100%{
        opacity:1;
    }
    }

    .tick {
    opacity:1;
    stroke-dasharray: 180;
    stroke-dashoffset: 180;
    animation: 2s tick-animation forwards;
    animation-delay: 2s;
    }

    @keyframes tick-animation {
    0%{
        stroke-dashoffset: 180;
    }
    100%{
        stroke-dashoffset: 0;
    }
    }

    #outerCircle1
    {
        border-top:7px solid #7B7365;
        border-bottom:7px solid transparent;
        border-left:7px solid transparent;
        border-right:7px solid 0;
        
        -webkit-animation: cwSpin 1s linear .2s infinite;
        -moz-animation: cwSpin .666s linear .2s infinite;
        -o-animation: cwSpin .666s linear .2s infinite;
        -ms-animation: cwSpin .666s linear .2s infinite;
        animation: cwSpin .666s linear .2s infinite;
    }
    #innerCircle
    {
        
        border-top:7px solid transparent;
        border-bottom:7px solid #7B7365;
        border-left:7px solid #7B7365;
        border-right:7px solid 0;

        -webkit-animation: ccwSpin .555s linear .2s infinite;
        -moz-animation: ccwSpin .555s linear .2s infinite;
        -o-animation: ccwSpin .555s linear .2s infinite;
        -ms-animation: ccwSpin .555s linear .2s infinite;
        animation: ccwSpin .555s linear .2s infinite;
    }


    @-webkit-keyframes cwSpin
    {
        0%{-webkit-transform:rotate(0deg);	}
        100%{-webkit-transform:rotate(360deg); }
    }
    @-moz-keyframes cwSpin
    {
        0%{-moz-transform:rotate(0deg);	}
        100%{-moz-transform:rotate(360deg); }
    }
    @-ms-keyframes cwSpin
    {
        0%{-ms-transform:rotate(0deg);	}
        100%{-ms-transform:rotate(360deg); }
    }
    @-o-keyframes cwSpin
    {
        0%{-o-transform:rotate(0deg);	}
        100%{-o-transform:rotate(360deg); }
    }
    @keyframes cwSpin
    {
        0%{transform:rotate(0deg);	}
        100%{transform:rotate(360deg); }
    }

    @-webkit-keyframes ccwSpin
    {
        0%{-webkit-transform:rotate(0deg);	}
        100%{-webkit-transform:rotate(-360deg); }
    }
    @-moz-keyframes ccwSpin
    {
        0%{-moz-transform:rotate(0deg);	}
        100%{-moz-transform:rotate(-360deg); }
    }
    @-ms-keyframes ccwSpin
    {
        0%{-ms-transform:rotate(0deg);	}
        100%{-ms-transform:rotate(-360deg); }
    }
    @-o-keyframes ccwSpin
    {
        0%{-o-transform:rotate(0deg);	}
        100%{-o-transform:rotate(-360deg); }
    }
    @keyframes ccwSpin
    {
        0%{transform:rotate(0deg);	}
        100%{transform:rotate(-360deg); }
    }

</style>